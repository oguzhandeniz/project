# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
import io
from typing import Any, List, Dict
import pandas as pd


def df_to_excel(df: pd.DataFrame, **kwargs: Any) -> Any:
    output = io.BytesIO()

    # timezones are not supported
    for column in df.select_dtypes(include=["datetimetz"]).columns:
        df[column] = df[column].astype(str)

    # pylint: disable=abstract-class-instantiated
    with pd.ExcelWriter(output, engine="xlsxwriter") as writer:
        df.to_excel(writer, **kwargs)

    return output.getvalue()

def pixels_to_excel_width(pixels):
    return (pixels - 5) / 7 + 1

def parse_grouped_columns(column_config: Dict[str, Any]) -> Dict:
    """Parses the column configuration to determine the header groups."""
    grouped_columns = {}
    for col, config in column_config.items():
        if 'groups' in config and config['groups']:
            groups = config['groups'].split(',')
            current = grouped_columns
            for group in groups:
                group = group.strip()
                if group not in current:
                    current[group] = {}
                current = current[group]
            current[col] = None
    return grouped_columns

def calculate_max_depth(grouped_columns: Dict) -> int:
    """Calculates the maximum depth of grouped headers."""
    def depth(d):
        if isinstance(d, dict) and d:
            return 1 + max(depth(v) for v in d.values())
        else:
            return 0
    return depth(grouped_columns)

def add_header_or_markdown(worksheet, row, content, max_columns, format):
    """
    Add a header or markdown to the Excel sheet.
    
    :param worksheet: The Excel worksheet object.
    :param row: The current row in the Excel sheet.
    :param content: The content to be added (either header text or markdown rows).
    :param max_columns: The number of columns the content should span.
    :param format: The format to be applied to the cell.
    :return: The next row index after adding the content.
    """
    if isinstance(content, str):
        # If content is a header, merge it across all columns
        worksheet.merge_range(row, 0, row, max_columns - 1, content, format)
         # Set the row height to accommodate the text (adjust as needed)
        row_height = 20 * (content.count('\n') + 1)  # Adjust row height based on the number of lines
        worksheet.set_row(row, row_height)
        return row + 2
    elif isinstance(content, list):
        # If content is markdown, write each row and merge it across all columns
        for line in content:
            worksheet.merge_range(row, 0, row, max_columns - 1, line, format)
            row += 1
        return row

def add_dataframe_to_excel(writer, df, queryContext, start_row=0, **kwargs):
    """Add a DataFrame to an Excel sheet with merged headers starting from a specific row."""
    formdata = queryContext.form_data
    column_config = formdata.get('column_config',{})
    grouped_columns = {}
    
    # Parse column groups from formdata
    for col, config in column_config.items():
        if 'groups' in config and config['groups']:
            groups = config['groups'].split(',')
            current = grouped_columns
            for group in groups:
                group = group.strip()
                if group not in current:
                    current[group] = {}
                current = current[group]
            current[col] = None
    
    # Calculate max header depth
    # Calculate max header depth, default to 0 if no groups are found
    if any('groups' in config and config['groups'] for config in column_config.values()):
        max_depth = max(len(config['groups'].split(',')) for config in column_config.values() if 'groups' in config and config['groups'])
    else:
        max_depth = 0
    has_total_row = False
    if queryContext.form_data.get('query_mode', '') == 'raw' and queryContext.form_data.get('show_column_totals', False):
        total_df = queryContext.get_df_payload(queryContext.queries[1]).get('df')
        # Initialize a dictionary to hold the totals row
        totals = {col: None for col in df.columns}
        totals[df.columns[0]] = 'Total'  # Set the first column value to "Total"
        # Iterate through the columns to compute the sums
        for col in df.columns:
            if 'SUM('+col+')' in total_df.columns:
                totals[col] = total_df['SUM('+col+')'].sum()  # Calculate the sum of the original column
        df.loc[len(df)] = totals
        has_total_row = True
    # Write the DataFrame after the headers, starting from the calculated start_row
    df.to_excel(writer, index=False, startrow=start_row + max_depth + 1, header=False, sheet_name='Sheet1')
    
    workbook = writer.book
    worksheet = writer.sheets['Sheet1']

    merge_format = workbook.add_format({
        'align': 'center',
        'valign': 'vcenter',
        'border': 1
    })
    cell_format_with_borders = workbook.add_format({
        'border': 1
    })

    def find_group_for_column(groups, target_col):
        for group, subgroups in groups.items():
            if isinstance(subgroups, dict):
                result = find_group_for_column(subgroups, target_col)
                if result:
                    return [group] + result
            elif subgroups is None and group == target_col:
                return [group]
        return None

    # Write headers and store cell values
    cell_values = [[''] * len(df.columns) for _ in range(max_depth + 1)]
    for col, column in enumerate(df.columns):
        groups = find_group_for_column(grouped_columns, column)
        if groups:
            for depth, group in enumerate(groups):
                cell_values[depth][col] = group
        cell_values[max_depth][col] = column

    # Write and merge cells for grouped headers
    for row in range(max_depth + 1):
        start_col = 0
        while start_col < len(df.columns):
            end_col = start_col
            while (end_col + 1 < len(df.columns) and 
                   cell_values[row][end_col + 1] == cell_values[row][start_col] and
                   cell_values[row][start_col] != ''):
                end_col += 1
            if cell_values[row][start_col]:
                if start_col == end_col:
                    # Merge vertically if the same text is in consecutive rows
                    merge_start_row = row
                    merge_end_row = row
                    while (merge_end_row + 1 < max_depth + 1 and 
                           cell_values[merge_end_row + 1][start_col] == cell_values[merge_start_row][start_col]):
                        merge_end_row += 1
                    if merge_start_row != merge_end_row:
                        worksheet.merge_range(start_row + merge_start_row, start_col, start_row + merge_end_row, start_col, cell_values[merge_start_row][start_col], merge_format)
                    else:
                        worksheet.write(start_row + row, start_col, cell_values[row][start_col], merge_format)
                else:
                    worksheet.merge_range(start_row + row, start_col, start_row + row, end_col, cell_values[row][start_col], merge_format)
            start_col = end_col + 1

    # Vertical merge for single header cells without groups
    for col in range(len(df.columns)):
        if not any(cell_values[row][col] for row in range(max_depth)):
            worksheet.merge_range(start_row, col, start_row + max_depth, col, cell_values[max_depth][col], merge_format)
    
    # Apply the border format to all data cells
    worksheet.conditional_format(start_row + max_depth + 1, 0, start_row + max_depth + len(df), len(df.columns) - 1, 
                                 {'type': 'no_blanks', 'format': cell_format_with_borders})

    # Apply row grouping based on allowRowGrouping
    try:
        anchor_column =  formdata.get('row_grouping_column')
        anchor_column_index = df.columns.get_loc(anchor_column)
    except:
        anchor_column_index = 0
    for col, column in enumerate(df.columns):
        if column in column_config and column_config[column].get('allowRowGrouping', False):
            start_merge_row = None
            current_value = None
            for row in range(len(df)):
                value = df.iloc[row, col]
                anchor_value = df.iloc[row, anchor_column_index]
                # Check if the value is the same as the current value and if previous columns are identical
                if (value == current_value and 
                    not pd.isna(value) and  # Ensure value is not NaN
                    not pd.isna(anchor_value) and
                    anchor_value == df.iloc[start_merge_row, anchor_column_index]): 
                    if start_merge_row is None:
                        start_merge_row = row - 1
                else:
                    if start_merge_row is not None:
                        worksheet.merge_range(start_row + max_depth + 1 + start_merge_row, col, 
                                            start_row + max_depth + 1 + row - 1, col, 
                                            current_value, merge_format)
                        start_merge_row = None
                    current_value = value
                    if not pd.isna(value):  # Update start_merge_row only if the value is not NaN
                        start_merge_row = row
            # Handle the final group if it extends to the last row
            if start_merge_row is not None and (not has_total_row):
                worksheet.merge_range(start_row + max_depth + 1 + start_merge_row, col, 
                                    start_row + max_depth + 1 + len(df) - 1, col, 
                                    current_value, merge_format)
            
    # Set column widths
    for i, column in enumerate(df.columns):
        if column in column_config and 'columnWidth' in column_config[column]:
            worksheet.set_column(i, i, pixels_to_excel_width(column_config[column]['columnWidth']))
        else:
            worksheet.set_column(i, i, 15)


def addTablewithoutgrouping(writer, df, formdata, start_row=0,**kwargs):
    df.to_excel(writer,index=True, startrow=start_row+1, header=True, sheet_name='Sheet1')

def create_excel_for_dashboard(dataframes,**kwargs) -> Any:
    output = io.BytesIO()
    # Define formats
    max_columns = 10
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        start_row = 0
        workbook = writer.book
        workbook.add_worksheet('Sheet1')
        worksheet = writer.sheets['Sheet1']
        header_format = workbook.add_format({
            'bold': True,
            'font_size': 14,
            'align': 'left',
            'valign': 'vcenter'
        })
        markdown_format = workbook.add_format({
            'text_wrap': True,
            'valign': 'vcenter',
            'align': 'left'
        })
        for chart in dataframes:
            if 'header' in chart:
                start_row = add_header_or_markdown(worksheet, start_row, chart['header'], max_columns, header_format)
            if 'markdown' in chart:
                start_row = add_header_or_markdown(worksheet, start_row, chart['markdown'], max_columns, markdown_format)
            if 'dataframe' in chart:
                if(chart['query_context'].form_data.get('enableGrouping',False)):
                    add_dataframe_to_excel(writer,chart['dataframe'],chart['query_context'], start_row)
                else:
                    addTablewithoutgrouping(writer,chart['dataframe'],chart['query_context'], start_row)
                # Update max_columns
                max_columns = max(max_columns, len(chart['dataframe'].columns))
                start_row += len(chart['dataframe']) + calculate_max_depth(parse_grouped_columns(chart['query_context'].form_data.get('column_config',{}))) + 3

    return output.getvalue()

def create_excel_with_merged_headers(df, queryContext) -> Any:
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        # Write the DataFrame starting after the headers, with borders
        add_dataframe_to_excel(writer, df, queryContext, 0)
    return output.getvalue()


