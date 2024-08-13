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
from typing import Any

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

def create_excel_with_merged_headers(df, formdata) -> Any:
    output = io.BytesIO()
    column_config = formdata['column_config']
    grouped_columns = {}
    for col, config in column_config.items():
        if 'groups' in config and config['groups']:
            groups = config['groups'].split(',')
            current = grouped_columns
            for group in groups:
                group = group.strip()  # Remove leading/trailing whitespace
                if group not in current:
                    current[group] = {}
                current = current[group]
            current[col] = None
    
    max_depth = max(len(config['groups'].split(',')) for config in column_config.values() if 'groups' in config and config['groups'])

    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        # Write the DataFrame starting after the headers, with borders
        df.to_excel(writer, index=False, startrow=max_depth + 1, header=False, sheet_name='Sheet1')
        workbook = writer.book
        worksheet = writer.sheets['Sheet1']

        merge_format = workbook.add_format({
            'align': 'center',
            'valign': 'vcenter',
            'border': 1
        })
        # Define a cell format for the data with borders
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
                            worksheet.merge_range(merge_start_row, start_col, merge_end_row, start_col, cell_values[merge_start_row][start_col], merge_format)
                        else:
                            worksheet.write(row, start_col, cell_values[row][start_col], merge_format)
                    else:
                        worksheet.merge_range(row, start_col, row, end_col, cell_values[row][start_col], merge_format)
                start_col = end_col + 1

        # Vertical merge for single header cells without groups
        for col in range(len(df.columns)):
            if not any(cell_values[row][col] for row in range(max_depth)):
                worksheet.merge_range(0, col, max_depth, col, cell_values[max_depth][col], merge_format)
        
        # Apply the border format to all data cells efficiently
        worksheet.conditional_format(max_depth + 1, 0, max_depth + len(df), len(df.columns) - 1, 
                                     {'type': 'no_blanks', 'format': cell_format_with_borders})

        # Set column widths
        for i, column in enumerate(df.columns):
            if column in column_config and 'columnWidth' in column_config[column]:
                worksheet.set_column(i, i, pixels_to_excel_width(column_config[column]['columnWidth']))
            else:
                worksheet.set_column(i, i, 15)

    return output.getvalue()
