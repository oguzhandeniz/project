# -*- coding: utf-8 -*-
# Tek Python dosyası içinde hem RAW hem AGGREGATE (2 DF, GENEL TOPLAM) Excel çıktısı

import io
import re
import math
import logging
import numbers
import traceback
import numpy as np
import pandas as pd

from typing import Any, List, Dict
from html.parser import HTMLParser
from superset.charts.post_processing import table
from xlsxwriter.utility import xl_range

logging.disable(logging.CRITICAL)

###############################################################################
# 1) TEMEL FONKSİYONLAR
###############################################################################
def df_to_excel(df: pd.DataFrame, **kwargs: Any) -> Any:
    output = io.BytesIO()
    for column in df.select_dtypes(include=["datetimetz"]).columns:
        df[column] = df[column].astype(str)

    with pd.ExcelWriter(
        output,
        engine="xlsxwriter",
        engine_kwargs={'options': {'nan_inf_to_errors': False}}
    ) as writer:
        df.to_excel(writer, **kwargs)

    return output.getvalue()

def pixels_to_excel_width(pixels):
    return (pixels - 5) / 7 + 1


###############################################################################
# 2) GENEL TOPLAM İÇİN YENİ HELPER FONKSİYONLAR (AGGREGATE TARAFI)
###############################################################################
def build_grand_total_df(df: pd.DataFrame, label: str = "GENEL TOPLAM") -> pd.DataFrame:
    numeric_cols = df.select_dtypes(include=["number"]).columns
    totals = df[numeric_cols].sum(numeric_only=True)

    grand_total = pd.DataFrame(columns=df.columns)
    for col in numeric_cols:
        grand_total.loc[0, col] = totals[col]

    dimension_cols = [c for c in df.columns if c not in numeric_cols]
    for col in dimension_cols:
        grand_total.loc[0, col] = ""

    if dimension_cols:
        grand_total.loc[0, dimension_cols[0]] = label
    elif len(df.columns) > 0:
        grand_total.iloc[0, 0] = label

    grand_total.fillna("", inplace=True)
    return grand_total

def is_aggregate_chart(queryContext) -> bool:
    fd = queryContext.form_data
    return fd.get("query_mode") == "aggregate"


###############################################################################
# 2.1) YENİLEME YAPILAN FONKSİYON (AGGREGATE: GENEL TOPLAM)
###############################################################################
def add_right_shifted_table(
    writer: pd.ExcelWriter,
    df: pd.DataFrame,      # tek satırlık veya birkaç satırlık DataFrame beklenebilir
    queryContext,
    start_row: int,
    label: str = "GENEL TOPLAM"
) -> int:
    """
    1) 'start_row' satırına ilk sütun = label (ör. GENEL TOPLAM)
    2) Kalan veriyi tek tek, sütun bazlı D3 format (num_format) ve alignment kurallarına göre yaz.
    3) Dönüş: yazılan son satır index'i.
    
    Bu fonksiyon da, her kolona ait normal/bold formatlardan "normal" versiyonu kullanır.
    'label' hücresi ise ayrıca bold format eklenmiştir.
    """

    from pandas.api.types import is_datetime64_any_dtype

    convert_html_links(df)
    df = clean_dataframe(df).applymap(lambda x: safe_value(x) if not pd.isna(x) else x)

    sheet = writer.sheets["Sheet1"]
    wb = writer.book

    # 1) Label'ı yaz (bold)
    label_fmt = wb.add_format({
        "bold": True,
        "border": 1,
        "align": "left",
        "valign": "vcenter"
    })
    sheet.write(start_row, 0, label, label_fmt)

    # 2) Kolon bazlı format çiftlerini oluştur
    formdata = queryContext.form_data if queryContext else {}
    alignment_formats = {
        'left':   wb.add_format({'border': 1, 'align': 'left',   'valign': 'vcenter'}),
        'center': wb.add_format({'border': 1, 'align': 'center', 'valign': 'vcenter'}),
        'right':  wb.add_format({'border': 1, 'align': 'right',  'valign': 'vcenter'})
    }

    # -- BURADA ESKİ get_column_formats YERİNE, ÇİFT FORMAT OLUŞTURUYORUZ:
    column_formats_pair = get_column_formats_pair(wb, df, formdata, alignment_formats)

    # 3) DataFrame hücrelerini uygun formatlarla yaz
    for r in range(len(df)):
        for c in range(len(df.columns)):
            val = df.iat[r, c]
            col_name = df.columns[c]

            # GENEL TOPLAM satırı istenirse bold da yapabilirsiniz;
            # burada örnek olarak normal format kullanalım
            fmt = column_formats_pair[col_name]["normal"]

            if pd.isna(val):
                sheet.write_blank(start_row + r, c, None, fmt)
            elif isinstance(val, numbers.Number):
                sheet.write_number(start_row + r, c, val, fmt)
            elif isinstance(val, pd.Timestamp) or (is_datetime64_any_dtype(type(val))):
                sheet.write_datetime(start_row + r, c, val, fmt)
            elif isinstance(val, tuple) and len(val) == 2:
                sheet.write_url(start_row + r, c, val[0], string=val[1], cell_format=fmt)
            else:
                sheet.write(start_row + r, c, val, fmt)

    return start_row + len(df)


###############################################################################
# 3) GRUPLU KOLON PARSE / ADDHEADER vb. (Mevcut Kod)
###############################################################################
def parse_add_header_instructions(markdown_content: str):
    pattern = re.compile(
        r'\[AddHeader:"(.*?)"(?:,([A-Za-z]+\d+)(?:,([A-Za-z]+\d+))?)?\]'
    )
    instructions = []

    def replace_func(match):
        text = match.group(1)
        start_cell = match.group(2) if match.group(2) else None
        end_cell = match.group(3) if match.group(3) else None
        instructions.append({
            'text': text,
            'start_cell': start_cell,
            'end_cell': end_cell
        })
        return ''  

    cleaned_text = pattern.sub(replace_func, markdown_content)
    return cleaned_text.strip(), instructions

def apply_add_header_instructions(worksheet, workbook, instructions):
    merge_format = workbook.add_format({
        'bold': True,
        'align': 'center',
        'valign': 'vcenter',
        'text_wrap': True,
        'border': 1
    })
    single_format = workbook.add_format({
        'bold': True,
        'align': 'left',
        'valign': 'vcenter',
        'text_wrap': True,
        'border': 1
    })

    for inst in instructions:
        text = inst['text']
        start_cell = inst['start_cell']
        end_cell = inst['end_cell']
        if not start_cell:
            continue
        start_row, start_col = excel_cell_to_indices(start_cell)

        if end_cell:
            end_row, end_col = excel_cell_to_indices(end_cell)
            try:
                worksheet.merge_range(start_row, start_col, end_row, end_col, text, merge_format)
            except Exception as e:
                if "overlaps" in str(e):
                    print("[WARNING] Overlapping AddHeader merge:", e)
                else:
                    raise
        else:
            try:
                worksheet.write(start_row, start_col, text, single_format)
            except Exception as e:
                if "overlaps" in str(e):
                    print("[WARNING] Overlapping single-cell AddHeader:", e)
                else:
                    raise

def parse_grouped_columns(column_config: Dict[str, Any]) -> Dict:
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
    def depth(d):
        if isinstance(d, dict) and d:
            return 1 + max(depth(v) for v in d.values())
        else:
            return 0
    return depth(grouped_columns)

def indices_to_excel_cell(row_idx: int, col_idx: int) -> str:
    col_ref = ""
    c = col_idx
    while c >= 0:
        r = c % 26
        col_ref = chr(r + ord('A')) + col_ref
        c = (c // 26) - 1
    row_ref = str(row_idx + 1)
    return f"{col_ref}{row_ref}"

def excel_cell_to_indices(cell: str) -> tuple[int, int]:
    match = re.match(r"([A-Za-z]+)(\d+)", cell)
    if not match:
        raise ValueError(f"Geçersiz hücre adresi: {cell}")
    column_str, row_str = match.groups()
    row = int(row_str) - 1
    column = 0
    for char in column_str.upper():
        column = column * 26 + (ord(char) - ord('A') + 1)
    column -= 1
    return row, column

def parse_position_syntax(markdown_content: str) -> tuple[str, str, str]:
    pattern = re.compile(r"\[Position:([A-Za-z]+\d+),([A-Za-z]+\d+)\]")
    match = pattern.search(markdown_content)
    if match:
        start_cell, end_cell = match.groups()
        cleaned_markdown = pattern.sub('', markdown_content).strip()
        return cleaned_markdown, start_cell, end_cell
    return markdown_content, None, None

def parse_background_color_syntax(markdown_content: str) -> tuple[str, List[Dict]]:
    pattern = re.compile(r"\[BackgroundColor:(#[0-9A-Fa-f]{6}),([A-Za-z]+\d+),([A-Za-z]+\d+)\]")
    matches = pattern.findall(markdown_content)
    background_colors = []
    for match_ in matches:
        color, start_cell, end_cell = match_
        background_colors.append({
            'color': color,
            'start_cell': start_cell,
            'end_cell': end_cell
        })
    cleaned_markdown = pattern.sub('', markdown_content).strip()
    return cleaned_markdown, background_colors

def parse_font_color_syntax(markdown_content: str) -> tuple[str, List[Dict]]:
    pattern = re.compile(r"\[FontColor:(#[0-9A-Fa-f]{6}),([A-Za-z]+\d+),([A-Za-z]+\d+)\]")
    matches = pattern.findall(markdown_content)
    font_colors = []
    for match_ in matches:
        color, start_cell, end_cell = match_
        font_colors.append({
            'color': color,
            'start_cell': start_cell,
            'end_cell': end_cell
        })
    cleaned_markdown = pattern.sub('', markdown_content).strip()
    return cleaned_markdown, font_colors


###############################################################################
# 4) HTML -> RICH STRING PARSE
###############################################################################
class RichStringHTMLParser(HTMLParser):
    def __init__(self, workbook):
        super().__init__()
        self.workbook = workbook
        self.rich_string = []
        self.format_stack = []
        self.cell_format = None
        self.heading_formats = {
            'h1': {'bold': True, 'font_size': 16},
            'h2': {'bold': True, 'font_size': 14},
            'h3': {'bold': True, 'font_size': 12},
        }
        self.italic_format = {'italic': True}
        self.paragraph_format = {'text_wrap': True}

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ['strong', 'b']:
            fmt = {'bold': True}
            self.format_stack.append(fmt)
        elif tag == 'i':
            fmt = self.italic_format.copy()
            self.format_stack.append(fmt)
        elif tag == 'u':
            fmt = {'underline': True}
            self.format_stack.append(fmt)
        elif tag == 'span':
            style = attrs.get('style', '')
            color_match = re.search(r'color\s*:\s*(#[0-9a-fA-F]{6}|[a-zA-Z]+)', style, re.IGNORECASE)
            fmt = {}
            if color_match:
                fmt['font_color'] = color_match.group(1)
            if fmt:
                self.format_stack.append(fmt)
        elif tag in ['h1', 'h2', 'h3']:
            fmt = self.heading_formats.get(tag, {})
            if fmt:
                self.format_stack.append(fmt)
        elif tag == 'div':
            style = attrs.get('style', '')
            align_match = re.search(r'text-align\s*:\s*(left|center|right)', style, re.IGNORECASE)
            if align_match:
                alignment = align_match.group(1)
                self.cell_format = {'align': alignment, 'valign': 'vcenter'}
        elif tag == 'p':
            self.format_stack.append(self.paragraph_format.copy())
        elif tag == 'br':
            self.rich_string.append('\n')

    def handle_endtag(self, tag):
        if tag in ['strong', 'b', 'i', 'u', 'span', 'h1', 'h2', 'h3', 'p']:
            if self.format_stack:
                self.format_stack.pop()
        elif tag == 'div':
            pass

    def handle_data(self, data):
        if data:
            if self.format_stack:
                combined_format = {}
                for fmt in self.format_stack:
                    combined_format.update(fmt)
                xlsx_format = self.workbook.add_format(combined_format)
                self.rich_string.append(xlsx_format)
            self.rich_string.append(data)

def parse_html_to_rich_string(workbook, html_content):
    parser = RichStringHTMLParser(workbook)
    parser.feed(html_content)
    parser.close()
    return parser.cell_format, parser.rich_string


###############################################################################
# 5) HEADERS / MARKDOWN EKLEME
###############################################################################
def add_header_or_markdown(worksheet, row, content, max_columns, cell_format, workbook):
    if isinstance(content, str):
        cleaned_content, add_header_instructions = parse_add_header_instructions(content)
        apply_add_header_instructions(worksheet, workbook, add_header_instructions)

        cleaned_content, start_cell, end_cell = parse_position_syntax(cleaned_content)
        cleaned_content, background_colors = parse_background_color_syntax(cleaned_content)
        cleaned_content, font_colors = parse_font_color_syntax(cleaned_content)
        alignment_format, rich_string = parse_html_to_rich_string(workbook, cleaned_content)

        if start_cell and end_cell:
            start_row_idx, start_col = excel_cell_to_indices(start_cell)
            end_row_idx, end_col = excel_cell_to_indices(end_cell)
            merged_format = workbook.add_format({
                'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                'valign': alignment_format.get('valign', 'vcenter') if alignment_format else 'vcenter',
                'text_wrap': True
            })
            try:
                worksheet.merge_range(start_row_idx, start_col, end_row_idx, end_col, '', merged_format)
            except Exception as e:
                if "overlaps" in str(e):
                    print("[WARNING] Overlapping position syntax:", e)
                else:
                    raise

            if rich_string:
                worksheet.write_rich_string(start_row_idx, start_col, *rich_string, merged_format)
            else:
                worksheet.write(start_row_idx, start_col, cleaned_content, merged_format)

            for bg in background_colors:
                color = bg['color']
                bg_start_row, bg_start_col = excel_cell_to_indices(bg['start_cell'])
                bg_end_row, bg_end_col = excel_cell_to_indices(bg['end_cell'])
                bg_format = workbook.add_format({'bg_color': color})
                worksheet.conditional_format(bg_start_row, bg_start_col, bg_end_row, bg_end_col, {
                    'type': 'no_errors',
                    'format': bg_format
                })
            for fc in font_colors:
                color = fc['color']
                fc_start_row, fc_start_col = excel_cell_to_indices(fc['start_cell'])
                fc_end_row, fc_end_col = excel_cell_to_indices(fc['end_cell'])
                fc_format = workbook.add_format({'font_color': color})
                worksheet.conditional_format(fc_start_row, fc_start_col, fc_end_row, fc_end_col, {
                    'type': 'no_errors',
                    'format': fc_format
                })

            return end_row_idx + 1

        else:
            if '<' in cleaned_content and '>' in cleaned_content:
                if max_columns > 1:
                    merged_format = workbook.add_format({
                        'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                        'valign': alignment_format.get('valign', 'vcenter') if alignment_format else 'vcenter',
                        'text_wrap': True
                    })
                    try:
                        worksheet.merge_range(row, 0, row, max_columns - 1, '', merged_format)
                    except Exception as e:
                        if "overlaps" in str(e):
                            print("[WARNING] Overlapping single row merge:", e)
                        else:
                            raise
                    if rich_string:
                        worksheet.write_rich_string(row, 0, *rich_string, merged_format)
                    else:
                        worksheet.write(row, 0, cleaned_content, merged_format)
                else:
                    single_format = workbook.add_format({
                        'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                        'valign': 'vcenter',
                        'text_wrap': True
                    })
                    if rich_string:
                        worksheet.write_rich_string(row, 0, *rich_string, single_format)
                    else:
                        worksheet.write(row, 0, cleaned_content, single_format)
            else:
                if max_columns > 1:
                    try:
                        worksheet.merge_range(row, 0, row, max_columns - 1, cleaned_content, cell_format)
                    except Exception as e:
                        if "overlaps" in str(e):
                            print("[WARNING] Overlapping single row text merge:", e)
                        else:
                            raise
                else:
                    worksheet.write(row, 0, cleaned_content, cell_format)

            row_height = 20 * (cleaned_content.count('\n') + 1)
            worksheet.set_row(row, row_height)

            for bg in background_colors:
                color = bg['color']
                bg_start_row, bg_start_col = excel_cell_to_indices(bg['start_cell'])
                bg_end_row, bg_end_col = excel_cell_to_indices(bg['end_cell'])
                bg_format = workbook.add_format({'bg_color': color})
                worksheet.conditional_format(bg_start_row, bg_start_col, bg_end_row, bg_end_col, {
                    'type': 'no_errors',
                    'format': bg_format
                })
            for fc in font_colors:
                color = fc['color']
                fc_start_row, fc_start_col = excel_cell_to_indices(fc['start_cell'])
                fc_end_row, fc_end_col = excel_cell_to_indices(fc['end_cell'])
                fc_format = workbook.add_format({'font_color': color})
                worksheet.conditional_format(fc_start_row, fc_start_col, fc_end_row, fc_end_col, {
                    'type': 'no_errors',
                    'format': fc_format
                })

            return row + 2

    elif isinstance(content, list):
        for line in content:
            cleaned_line, add_header_instructions = parse_add_header_instructions(line)
            apply_add_header_instructions(worksheet, workbook, add_header_instructions)

            cleaned_line, start_cell, end_cell = parse_position_syntax(cleaned_line)
            cleaned_line, background_colors = parse_background_color_syntax(cleaned_line)
            cleaned_line, font_colors = parse_font_color_syntax(cleaned_line)
            alignment_format, rich_string = parse_html_to_rich_string(workbook, cleaned_line)

            if start_cell and end_cell:
                start_row_idx, start_col = excel_cell_to_indices(start_cell)
                end_row_idx, end_col = excel_cell_to_indices(end_cell)
                merged_format = workbook.add_format({
                    'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                    'valign': alignment_format.get('valign', 'vcenter'),
                    'text_wrap': True
                })
                try:
                    worksheet.merge_range(start_row_idx, start_col, end_row_idx, end_col, '', merged_format)
                except Exception as e:
                    if "overlaps" in str(e):
                        print("[WARNING] Overlapping list merge:", e)
                    else:
                        raise

                if rich_string:
                    worksheet.write_rich_string(start_row_idx, start_col, *rich_string, merged_format)
                else:
                    worksheet.write(start_row_idx, start_col, cleaned_line, merged_format)

                for bg in background_colors:
                    color = bg['color']
                    bg_start_row, bg_start_col = excel_cell_to_indices(bg['start_cell'])
                    bg_end_row, bg_end_col = excel_cell_to_indices(bg['end_cell'])
                    bg_format = workbook.add_format({'bg_color': color})
                    worksheet.conditional_format(bg_start_row, bg_start_col, bg_end_row, bg_end_col, {
                        'type': 'no_errors',
                        'format': bg_format
                    })
                for fc in font_colors:
                    color = fc['color']
                    fc_start_row, fc_start_col = excel_cell_to_indices(fc['start_cell'])
                    fc_end_row, fc_end_col = excel_cell_to_indices(fc['end_cell'])
                    fc_format = workbook.add_format({'font_color': color})
                    worksheet.conditional_format(fc_start_row, fc_start_col, fc_end_row, fc_end_col, {
                        'type': 'no_errors',
                        'format': fc_format
                    })

                row = end_row_idx + 1
            else:
                if '<' in cleaned_line and '>' in cleaned_line:
                    if max_columns > 1:
                        merged_format = workbook.add_format({
                            'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                            'valign': alignment_format.get('valign', 'vcenter'),
                            'text_wrap': True
                        })
                        try:
                            worksheet.merge_range(row, 0, row, max_columns - 1, '', merged_format)
                        except Exception as e:
                            if "overlaps" in str(e):
                                print("[WARNING] Overlapping list HTML merge:", e)
                            else:
                                raise
                        if rich_string:
                            worksheet.write_rich_string(row, 0, *rich_string, merged_format)
                        else:
                            worksheet.write(row, 0, cleaned_line, merged_format)
                    else:
                        single_format = workbook.add_format({
                            'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                            'valign': 'vcenter'
                        })
                        if rich_string:
                            worksheet.write_rich_string(row, 0, *rich_string, single_format)
                        else:
                            worksheet.write(row, 0, cleaned_line, single_format)
                else:
                    if max_columns > 1:
                        try:
                            worksheet.merge_range(row, 0, row, max_columns - 1, cleaned_line, cell_format)
                        except Exception as e:
                            if "overlaps" in str(e):
                                print("[WARNING] Overlapping list text merge:", e)
                            else:
                                raise
                    else:
                        worksheet.write(row, 0, cleaned_line, cell_format)

                row_height = 20 * (cleaned_line.count('\n') + 1)
                worksheet.set_row(row, row_height)

                for bg in background_colors:
                    color = bg['color']
                    bg_start_row, bg_start_col = excel_cell_to_indices(bg['start_cell'])
                    bg_end_row, bg_end_col = excel_cell_to_indices(bg['end_cell'])
                    bg_format = workbook.add_format({'bg_color': color})
                    worksheet.conditional_format(bg_start_row, bg_start_col, bg_end_row, bg_end_col, {
                        'type': 'no_errors',
                        'format': bg_format
                    })
                for fc in font_colors:
                    color = fc['color']
                    fc_start_row, fc_start_col = excel_cell_to_indices(fc['start_cell'])
                    fc_end_row, fc_end_col = excel_cell_to_indices(fc['end_cell'])
                    fc_format = workbook.add_format({'font_color': color})
                    worksheet.conditional_format(fc_start_row, fc_start_col, fc_end_row, fc_end_col, {
                        'type': 'no_errors',
                        'format': fc_format
                    })
                row += 1

        return row


###############################################################################
# 6) VERİ DÖNÜŞÜM, FORMAT, DUPLICATE GİDERME vb.
###############################################################################
def convert_html_links(df):
    anchor_tag_pattern = re.compile(r'<a href="(.*?)">(.*?)</a>')
    for col in df.columns:
        df[col] = df[col].apply(
            lambda x: convert_anchor_to_link(x, anchor_tag_pattern) if isinstance(x, str) else x
        )

def convert_anchor_to_link(text, pattern):
    match = pattern.search(text)
    if match:
        url = match.group(1)
        display_text = match.group(2)
        return (url, display_text)
    return text

def safe_value(value):
    if isinstance(value, (float, np.floating)):
        if math.isnan(value) or np.isnan(value):
            return ''
        if math.isinf(value) or np.isinf(value):
            return 'Infinity' if value > 0 else '-Infinity'
    return value

def clean_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    df = df.replace([np.inf, -np.inf], np.nan)
    return df

def d3_to_excel_format(d3_format):
    format_map = {
        ',.d': '#.##',
        ',.0f': '#,##0',
        ',.1f': '#,##0.0',
        ',.2f': '#,##0.00',
        ',.3f': '#,##0.000',
        '.0%': '0%',
        '.1%': '0.0%',
        '.2%': '0.00%',
        '.3%': '0.000%',
        ',.0%': '#,##0%',
        ',.1%': '#,##0.0%',
        ',.2%': '#,##0.00%',
        ',.3%': '#,##0.000%',
        '%B': 'mmmm',            # Full month name (Mart, Nisan, etc.)
        '%b': 'mmm',             # Abbreviated month name
        '%Y': 'yyyy',            # 4-digit year
        '%m': 'mm',              # 2-digit month
        '%d': 'dd',              # 2-digit day
        '%d-%m-%Y %H:%M:%S': 'dd-mm-yyyy hh:mm:ss',
    }
    date_time_pattern = re.compile(r'%[dmyHMS\- :]+')
    if date_time_pattern.fullmatch(d3_format):
        excel_format = (d3_format.replace('%d', 'dd')
                                  .replace('%m', 'mm')
                                  .replace('%Y', 'yyyy')
                                  .replace('%H', 'hh')
                                  .replace('%M', 'mm')
                                  .replace('%S', 'ss'))
        return excel_format
    return format_map.get(d3_format, '#,##0')


def _get_pivot_column_types(df, formdata):
   
    numeric_columns = []
    datetime_columns = []
    
    
    temporal_lookup = formdata.get('temporal_columns_lookup', {})
    temporal_column_names = [col for col, is_temporal in temporal_lookup.items() if is_temporal]
    
    all_columns_to_check = list(df.columns)

    groupby_columns = formdata.get('groupbyColumns', [])
    for col in groupby_columns:
        if col not in all_columns_to_check:
            all_columns_to_check.append(col)
    
    if hasattr(df.index, 'names') and df.index.names:
        for index_name in df.index.names:
            if index_name and index_name in temporal_column_names:
                all_columns_to_check.append(index_name)
    
    if hasattr(df.index, 'levels'):
        for level_idx, level_name in enumerate(df.index.names or []):
            if level_name and level_name in temporal_column_names:
                datetime_columns.extend([level_name])
    
    for col in df.columns:
        
        col_name = str(col) if not isinstance(col, tuple) else str(col)
        is_temporal_column = any(temporal_col in col_name for temporal_col in temporal_column_names)
        
        if is_temporal_column:
            datetime_columns.append(col)
            continue
            
        try:
           
            sample_value = df[col].dropna().iloc[0] if not df[col].dropna().empty else None
            
            if sample_value is not None:
                
                if isinstance(sample_value, (int, float)) or str(sample_value).replace('.', '').replace('-', '').isdigit():
                    numeric_columns.append(col)
                elif hasattr(sample_value, 'year') or 'date' in str(type(sample_value)).lower():
                    datetime_columns.append(col)
        except (IndexError, AttributeError):
            numeric_columns.append(col)
    
    # Check groupbyColumns for type classification
    for col_name in groupby_columns:
        if col_name in temporal_lookup and temporal_lookup[col_name]:
            if col_name not in datetime_columns:
                datetime_columns.append(col_name)
    
    for index_name in (df.index.names or []):
        if index_name and index_name in temporal_column_names and index_name not in datetime_columns:
            datetime_columns.append(index_name)

    return numeric_columns, datetime_columns

def get_pivot_column_formats(workbook,df, formdata,alignment_formats):
    column_formats = {}
    number_alignment_format_cache = {}
    datetime_alignment_format_cache = {}
    value_format = formdata.get('valueFormat', ',d')  # Default numeric format
    date_format = formdata.get('date_format', '%B')   # Default date format (%B = month name)
    default_align = 'left'
    numeric_columns, datetime_columns = _get_pivot_column_types(df, formdata)
    all_columns_for_excel = []
    if hasattr(df.index, 'names') and df.index.names:
        for index_name in df.index.names:
            if index_name:  # Skip None names
                all_columns_for_excel.append(index_name)
    all_columns_for_excel.extend(list(df.columns))

    for column in all_columns_for_excel:  
        if column in datetime_columns:
            # Use date_format for datetime columns
            excel_format_str = d3_to_excel_format(date_format)
            format_key = (excel_format_str, default_align)
            if format_key not in datetime_alignment_format_cache:
                datetime_alignment_format_cache[format_key] = workbook.add_format({
                    'num_format': excel_format_str,
                    'align': default_align,
                    'valign': 'vcenter',
                    'border': 1
                })
            column_formats[column] = datetime_alignment_format_cache[format_key]
        elif column in numeric_columns:
            # Use valueFormat for numeric columns (aggregated values)
            excel_format_str = d3_to_excel_format(value_format)
            format_key = (excel_format_str, default_align)
            if format_key not in number_alignment_format_cache:
                number_alignment_format_cache[format_key] = workbook.add_format({
                    'num_format': excel_format_str,
                    'align': default_align,
                    'valign': 'vcenter',
                    'border': 1
                })
            column_formats[column] = number_alignment_format_cache[format_key]
        else:
            # Default format for any other columns
            column_formats[column] = alignment_formats.get(
                default_align,
                workbook.add_format({
                    'border': 1,
                    'align': default_align,
                    'valign': 'vcenter'
                })
            )
    
    return column_formats

def remove_duplicates_in_grouped_columns(df: pd.DataFrame,
                                         column_config: Dict[str, Any],
                                         anchor_column: str) -> pd.DataFrame:
    if not anchor_column or anchor_column not in df.columns:
        return df

    last_anchor_val = None
    for i in range(len(df)):
        anchor_val = df.iloc[i][anchor_column]
        if anchor_val == last_anchor_val:
            for col, config in column_config.items():
                if config.get('allowRowGrouping', False):
                    val = df.iloc[i][col]
                    if isinstance(val, (int, float, np.integer, np.floating)):
                        df.at[i, col] = None
        else:
            last_anchor_val = anchor_val

    return df


###############################################################################
# 6.1) YENİ FONKSİYON: HEM NORMAL HEM BOLD FORMATLARI DÖNDÜR
###############################################################################
def get_column_formats_pair(workbook, df, formdata, alignment_formats):
    """
    Her kolon için 'normal' ve 'bold' format objeleri döndürür,
    d3NumberFormat varsa num_format uygulanır.
    
    Dönüş:
      {
         'columnA': {'normal': <Format>, 'bold': <Format>},
         'columnB': {'normal': <Format>, 'bold': <Format>},
         ...
      }
    """
    column_formats_pair = {}
    column_config = formdata.get('column_config', {})

    numeric_columns = df.select_dtypes(include=['number']).columns.tolist()
    datetime_columns = df.select_dtypes(include=['datetime']).columns.tolist()

    for column in df.columns:
        config = column_config.get(column, {})
        d3_format_str = config.get('d3NumberFormat')
        horizontal_align = config.get('horizontalAlign', 'left')

        if d3_format_str and column in numeric_columns:
            excel_format_str = d3_to_excel_format(d3_format_str)
            base_props = {
                'num_format': excel_format_str,
                'align': horizontal_align,
                'valign': 'vcenter',
                'border': 1
            }
            normal_fmt = workbook.add_format(base_props)
            bold_fmt   = workbook.add_format({**base_props, 'bold': True})
        elif column in datetime_columns:
            d3_format_str = config.get('d3NumberFormat', '%d-%m-%Y %H:%M:%S')
            excel_format_str = d3_to_excel_format(d3_format_str)
            base_props = {
                'num_format': excel_format_str,
                'align': horizontal_align,
                'valign': 'vcenter',
                'border': 1
            }
            normal_fmt = workbook.add_format(base_props)
            bold_fmt   = workbook.add_format({**base_props, 'bold': True})
        else:
            # string veya diğer tip
            base_props = {
                'border': 1,
                'align': horizontal_align,
                'valign': 'vcenter'
            }
            normal_fmt = workbook.add_format(base_props)
            bold_fmt   = workbook.add_format({**base_props, 'bold': True})

        column_formats_pair[column] = {
            "normal": normal_fmt,
            "bold": bold_fmt
        }

    return column_formats_pair


###############################################################################
# 7) ANA TABLOYU YAZMA (RAW MANTIĞI) - DÜZELTİLMİŞ
###############################################################################
def add_dataframe_to_excel(writer, df, queryContext, start_row=0, **kwargs):
    """
    RAW tabloyu excel'e yazar:
    - Grup başlıkları (jenerik)
    - Veriler
    - RAW modunda en alta 'Toplam' satırı isteniyorsa, d3NumberFormat korur.
    """
    try:
        formdata = queryContext.form_data
        column_config = formdata.get('column_config', {})

        grouped_columns = parse_grouped_columns(column_config)
        if any('groups' in cfg and cfg['groups'] for cfg in column_config.values()):
            max_depth = max(
                len(cfg['groups'].split(','))
                for cfg in column_config.values()
                if 'groups' in cfg and cfg['groups']
            )
        else:
            max_depth = 0

        # RAW modunda column_totals istenmişse, en alta Toplam satırı ekleyebiliriz
        has_total_row = False
        if formdata.get("query_mode") == "raw" and formdata.get("show_column_totals", False):
            numeric_cols = [
                col for col in df.columns
                if column_config.get(col, {}).get("showTotal") is True
                and pd.api.types.is_numeric_dtype(df[col])
            ]
            if numeric_cols:
                total_row = {c: df[c].sum() if c in numeric_cols else "" for c in df.columns}
                anchor_column = formdata.get("row_grouping_column") or df.columns[0]
                total_row[anchor_column] = "Toplam"
                df = pd.concat([df, pd.DataFrame([total_row])], ignore_index=True)
                has_total_row = True

        convert_html_links(df)
        df = clean_dataframe(df).applymap(lambda x: safe_value(x) if not pd.isna(x) else x)

        workbook = writer.book
        worksheet = writer.sheets['Sheet1']

        merge_format = workbook.add_format({
            'bold': True,
            'align': 'center',
            'valign': 'vcenter',
            'border': 1,
            'text_wrap': True
        })
        cell_format_with_borders = workbook.add_format({'border': 1})
        link_format = workbook.add_format({'font_color': 'blue', 'underline': True, 'border': 1})
        null_format = workbook.add_format({'border': 1})

        alignment_formats = {
            'left':   workbook.add_format({'border': 1, 'align': 'left',   'valign': 'vcenter'}),
            'center': workbook.add_format({'border': 1, 'align': 'center', 'valign': 'vcenter'}),
            'right':  workbook.add_format({'border': 1, 'align': 'right',  'valign': 'vcenter'})
        }

        # BURADA eskiden get_column_formats(...) vardı; yerine çift format:
        column_formats_pair = get_column_formats_pair(workbook, df, formdata, alignment_formats)

        # Grup başlıklarını hazırlama
        cell_values = [[''] * len(df.columns) for _ in range(max_depth + 1)]

        def find_group_for_column(groups, target_col):
            for group, subgroups in groups.items():
                if isinstance(subgroups, dict):
                    result = find_group_for_column(subgroups, target_col)
                    if result:
                        return [group] + result
                    elif subgroups is None and group == target_col:
                        return [group]
                elif subgroups is None and group == target_col:
                    return [group]
            return None

        for col_idx, column_name in enumerate(df.columns):
            grp_list = find_group_for_column(grouped_columns, column_name)
            if grp_list:
                for depth, g_ in enumerate(grp_list):
                    cell_values[depth][col_idx] = g_ or ''
            cell_values[max_depth][col_idx] = column_name or ''

        for row_idx in range(max_depth - 1, -1, -1):
            for col_idx in range(len(df.columns)):
                if not cell_values[row_idx][col_idx].strip():
                    cell_values[row_idx][col_idx] = cell_values[row_idx + 1][col_idx]

        for row_idx in range(1, max_depth + 1):
            for col_idx in range(len(df.columns)):
                if not cell_values[row_idx][col_idx].strip():
                    cell_values[row_idx][col_idx] = cell_values[row_idx - 1][col_idx]

        # Yatay merge
        for row in range(max_depth + 1):
            start_col = 0
            while start_col < len(df.columns):
                end_col = start_col
                while (
                    end_col + 1 < len(df.columns)
                    and cell_values[row][end_col + 1] == cell_values[row][start_col]
                ):
                    end_col += 1
                if cell_values[row][start_col]:
                    if start_col != end_col:
                        worksheet.merge_range(
                            start_row + row,
                            start_col,
                            start_row + row,
                            end_col,
                            cell_values[row][start_col],
                            merge_format
                        )
                    else:
                        worksheet.write(
                            start_row + row,
                            start_col,
                            cell_values[row][start_col],
                            merge_format
                        )
                start_col = end_col + 1

        # Dikey merge
        for col_idx in range(len(df.columns)):
            row_idx = 0
            while row_idx < max_depth + 1:
                merge_start = row_idx
                merge_end = row_idx
                while (
                    merge_end + 1 < max_depth + 1
                    and cell_values[merge_end + 1][col_idx] == cell_values[merge_start][col_idx]
                ):
                    merge_end += 1
                if cell_values[merge_start][col_idx]:
                    if merge_end > merge_start:
                        worksheet.merge_range(
                            start_row + merge_start, col_idx,
                            start_row + merge_end,   col_idx,
                            cell_values[merge_start][col_idx],
                            merge_format
                        )
                    else:
                        worksheet.write(
                            start_row + merge_start,
                            col_idx,
                            cell_values[merge_start][col_idx],
                            merge_format
                        )
                row_idx = merge_end + 1

        data_start_row = start_row + max_depth + 1

        anchor_column = formdata.get('row_grouping_column')
        anchor_column_index = 0
        if anchor_column and anchor_column in df.columns:
            anchor_column_index = df.columns.get_loc(anchor_column)

        # Dikey grouping
        for col_idx, column_name in enumerate(df.columns):
            if column_name in column_config and column_config[column_name].get('allowRowGrouping', False):
                start_merge_row = None
                current_value = None
                for row_i in range(len(df)):
                    value = df.iloc[row_i, col_idx]
                    anchor_value = df.iloc[row_i, anchor_column_index] if anchor_column_index < len(df.columns) else None
                    if (
                        value == current_value
                        and not pd.isna(value)
                        and not pd.isna(anchor_value)
                        and anchor_value == df.iloc[start_merge_row, anchor_column_index]
                    ):
                        continue
                    else:
                        if start_merge_row is not None:
                            if row_i - 1 != start_merge_row:
                                worksheet.merge_range(
                                    data_start_row + start_merge_row, col_idx,
                                    data_start_row + row_i - 1,       col_idx,
                                    current_value,
                                    merge_format
                                )
                        current_value = value
                        start_merge_row = row_i

                if start_merge_row is not None and not has_total_row:
                    if start_merge_row != len(df) - 1:
                        worksheet.merge_range(
                            data_start_row + start_merge_row, col_idx,
                            data_start_row + len(df) - 1,     col_idx,
                            current_value,
                            merge_format
                        )

        remove_duplicates_in_grouped_columns(df, column_config, anchor_column)

        # Yazma işlemi
        # Not: "has_total_row" ile son satır 'Toplam' -> bold numeric format
        for row_num, row_data in enumerate(df.itertuples(index=False)):
            is_total_row = has_total_row and (row_num == len(df) - 1)
            for col_num, value in enumerate(row_data):
                cell_row = data_start_row + row_num
                cell_col = col_num
                col_name = df.columns[col_num]

                # Hangi format seti?
                if is_total_row:
                    # Tüm hücreyi bold yapmak isterseniz:
                    #   numeric -> bold numeric
                    #   string -> bold string
                    # Yani pair'daki "bold" versiyonunu seçiyoruz
                    fmt = column_formats_pair[col_name]["bold"]
                else:
                    fmt = column_formats_pair[col_name]["normal"]

                # Değer yazma
                if pd.isna(value):
                    worksheet.write_blank(cell_row, cell_col, None, fmt)
                elif isinstance(value, tuple):
                    worksheet.write_url(cell_row, cell_col, value[0], string=value[1], cell_format=fmt)
                elif isinstance(value, pd.Timestamp):
                    worksheet.write_datetime(cell_row, cell_col, value, fmt)
                elif isinstance(value, numbers.Number):
                    worksheet.write_number(cell_row, cell_col, value, fmt)
                else:
                    worksheet.write(cell_row, cell_col, value, fmt)

        # Kolon genişliklerini ayarla
        for i, c_ in enumerate(df.columns):
            if c_ in column_config and 'columnWidth' in column_config[c_]:
                w_ = column_config[c_]['columnWidth'] or 15
                worksheet.set_column(i, i, w_)
            else:
                worksheet.set_column(i, i, 15)

    except Exception as ex:
        print("[ERROR] add_dataframe_to_excel:", ex)
        print(traceback.format_exc())
        raise


###############################################################################
# 8) HORIZONTAL MODE
###############################################################################
def addHorizontalTable(writer, df, queryContext, start_row=0, **kwargs):
    worksheet = writer.sheets['Sheet1'] if 'Sheet1' in writer.sheets else None
    workbook = writer.book
    formdata = queryContext.form_data

    header_format = workbook.add_format({
        'bold': True,
        'bg_color': '#F0F0F0',
        'border': 1,
        'align': 'center',
        'valign': 'vcenter'
    })
    cell_format = workbook.add_format({
        'text_wrap': True,
        'bold': True,
        'border': 1,
        'align': 'left'
    })
    link_format = workbook.add_format({'font_color': 'blue', 'underline': True})

    column_config = formdata.get('column_config', {})
    grouped_columns = {}
    merged_ranges = set()
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

    if any('groups' in config and config['groups'] for config in column_config.values()):
        max_depth = max(len(config['groups'].split(',')) 
                        for config in column_config.values() if 'groups' in config and config['groups'])
    else:
        max_depth = 0

    current_row = start_row
    column_groups = {}
    for col in df.columns:
        config = column_config.get(col, {})
        if 'groups' in config and config['groups']:
            groups = [g.strip() for g in config['groups'].split(',')]
            while len(groups) < max_depth:
                groups.insert(0, '')
            column_groups[col] = groups
        else:
            column_groups[col] = [''] * max_depth

    for column in df.columns:
        groups = column_groups[column]
        for depth, group in enumerate(groups):
            if group:
                group_key = tuple(groups[:depth + 1])
                if group_key not in merged_ranges:
                    merged_ranges.add(group_key)
                    span_end = current_row
                    for next_col in list(df.columns)[list(df.columns).index(column) + 1:]:
                        next_groups = column_groups[next_col]
                        if next_groups[:depth + 1] == groups[:depth + 1]:
                            span_end += 1
                        else:
                            break
                    if span_end > current_row:
                        worksheet.merge_range(current_row, depth, span_end, depth, group, header_format)
                    else:
                        worksheet.write(current_row, depth, group, header_format)
            else:
                worksheet.write(current_row, depth, '', header_format)

        worksheet.write(current_row, max_depth, column, header_format)

        df2 = table(df, formdata)  # Post-processing
        convert_html_links(df2)

        for data_idx, value in enumerate(df2[column]):
            if isinstance(value, tuple):
                worksheet.write_url(current_row, max_depth + 1 + data_idx, value[0], string=value[1], cell_format=link_format)
            else:
                safe_val = safe_value(value)
                worksheet.write(current_row, max_depth + 1 + data_idx, safe_val, cell_format)

        current_row += 1

    for col in range(max_depth + 1):
        worksheet.set_column(col, col, 30)
    for col in range(max_depth + 1, max_depth + 1 + len(df.columns)):
        worksheet.set_column(col, col, 15)

    return current_row

def addPivotTable(writer, df, queryContext, start_row=0, **kwargs):
    formdata = queryContext.form_data
    workbook = writer.book
    worksheet = writer.sheets['Sheet1']
    
    # Get column formats based on D3 settings
    column_formats = get_pivot_column_formats(workbook, df, formdata, {})
    
    
    # Calculate dimensions
    num_index_cols = len(df.index.names) if hasattr(df.index, 'names') and df.index.names else 1
    num_data_cols = len(df.columns)
    end_row = start_row + len(df)  # Last row with data
    
    # Apply conditional formatting to ranges for each column
    for col in range(num_index_cols + num_data_cols):
        
        # Determine which column this represents
        if col < num_index_cols:
            # This is an index column
            if hasattr(df.index, 'names') and df.index.names:
                index_names = [name for name in df.index.names if name is not None]
                if col < len(index_names):
                    col_name = index_names[col]
                else:
                    continue
            else:
                col_name = df.index.name or 'index'
        else:
            # This is a data column
            data_col_index = col - num_index_cols
            if data_col_index < len(df.columns):
                col_name = df.columns[data_col_index]
            else:
                continue
        
        # Get the format for this column
        fmt = column_formats.get(col_name)
        if fmt:
            # Define the range for this column (skip header, include all data)
            col_letter = chr(65 + col) if col < 26 else chr(65 + col // 26 - 1) + chr(65 + col % 26)
            cell_range = f'{col_letter}{start_row + 3}:{col_letter}{end_row + 2}'
            
            
             # Different threshold for each column
            unique_criteria_value = -999999999 + col 
            worksheet.conditional_format(cell_range, {
                'type': 'cell',
                'criteria': '>=',
                'value': unique_criteria_value,
                'format': fmt,
                'stop_if_true': False  # Don't stop processing other rules
            })
    verbose_map = queryContext.datasource.verbose_map
    if verbose_map:
        df.index.names = [verbose_map.get(name, name) for name in df.index.names]
        df.columns = pd.MultiIndex.from_tuples(
            [tuple(verbose_map.get(item, item) for item in col) for col in df.columns],
            names=df.columns.names  # preserve original names
        )
    # First, write the data using pandas native method (this handles subtotals, merging, etc.)
    df.to_excel(writer, index=True, startrow=start_row, header=True, sheet_name='Sheet1')
    groupby_columns = formdata.get('groupbyColumns', [])
    if len(groupby_columns) == 1:
        # Format the second header row (groupbyColumns values like dates)
        fmt = column_formats.get(groupby_columns[0])
        if fmt:
            # The second header row starts after index columns
            start_col = num_index_cols
            end_col = start_col + num_data_cols - 1
            
            # Convert to Excel column letters
            start_col_letter = chr(65 + start_col) if start_col < 26 else chr(65 + start_col // 26 - 1) + chr(65 + start_col % 26)
            end_col_letter = chr(65 + end_col) if end_col < 26 else chr(65 + end_col // 26 - 1) + chr(65 + end_col % 26)
            
            # Format the header row (row index start_row + 2 for the second level of MultiIndex)
            header_range = f'{start_col_letter}{start_row + 2}:{end_col_letter}{start_row + 2}'
            
            # Use a unique criteria value for header formatting
            unique_criteria_value = -888888888
            worksheet.conditional_format(header_range, {
                'type': 'cell',
                'criteria': '>=',
                'value': unique_criteria_value,
                'format': fmt,
                'stop_if_true': False
            })
###############################################################################
# 9) GRUPSUZ TABLO
###############################################################################
def addTablewithoutgrouping(writer, df, formdata, start_row=0, **kwargs):
    df.to_excel(writer, index=True, startrow=start_row + 1, header=True, sheet_name='Sheet1')


def apply_white_background_to_all_cells(worksheet, white_fill_format, max_row=1200, max_col=200):
    for row in range(max_row):
        for col in range(max_col):
            worksheet.write_blank(row, col, None, white_fill_format)


###############################################################################
# 10) BİRDEN FAZLA TABLOYU TEK EXCEL DOSYASINA EKLEME (create_excel_for_dashboard)
###############################################################################
def create_excel_for_dashboard(dataframes, **kwargs) -> Any:
    """
    dataframes: 
      [
        {
          'header': "...",
          'markdown': "...",
          'dataframe': [df1, df2],
          'query_context': { 'form_data': {...} },
          'background_colors': [...],
          'font_colors': [...]
        },
        ...
      ]
    """
    output = io.BytesIO()
    max_columns = 10

    with pd.ExcelWriter(
        output,
        engine='xlsxwriter',
        engine_kwargs={'options': {'nan_inf_to_errors': False}}
    ) as writer:
        start_row = 0
        workbook = writer.book
        worksheet = workbook.add_worksheet('Sheet1')
        writer.sheets['Sheet1'] = worksheet

        # Örnek: Tüm hücrelere beyaz arkaplan (ihtiyaca göre)
        white_fill_format = workbook.add_format({'bg_color': 'white'})
        apply_white_background_to_all_cells(worksheet, white_fill_format)

        # Temel format örnekleri
        header_format = workbook.add_format({
            'bold': True,
            'font_size': 12,
            'align': 'left',
            'valign': 'vcenter'
        })
        markdown_format = workbook.add_format({
            'text_wrap': True,
            'valign': 'vcenter',
            'align': 'left'
        })
        title_format = workbook.add_format({
            'bold': True,
            'text_wrap': True,
            'valign': 'vcenter',
            'align': 'center',
            'border': 1
        })

        for chart_idx, chart in enumerate(dataframes):
            # 1) header varsa yaz
            if 'header' in chart:
                start_row = add_header_or_markdown(
                    worksheet,
                    start_row,
                    chart['header'],
                    max_columns,
                    header_format,
                    workbook
                )
            # 2) markdown varsa yaz
            if 'markdown' in chart:
                start_row = add_header_or_markdown(
                    worksheet,
                    start_row,
                    chart['markdown'],
                    max_columns,
                    markdown_format,
                    workbook
                )

            # 3) background_colors varsa uygula
            if 'background_colors' in chart:
                for bg_directive in chart['background_colors']:
                    color = bg_directive['color']
                    start_cell = bg_directive['start_cell']
                    end_cell = bg_directive['end_cell']
                    bg_format = workbook.add_format({'bg_color': color})
                    start_row_idx, start_col = excel_cell_to_indices(start_cell)
                    end_row_idx, end_col = excel_cell_to_indices(end_cell)
                    worksheet.conditional_format(start_row_idx, start_col, end_row_idx, end_col, {
                        'type': 'no_errors',
                        'format': bg_format
                    })

            # 4) font_colors varsa uygula
            if 'font_colors' in chart:
                for fc_directive in chart['font_colors']:
                    color = fc_directive['color']
                    start_cell = fc_directive['start_cell']
                    end_cell = fc_directive['end_cell']
                    fc_format = workbook.add_format({'font_color': color})
                    start_row_idx, start_col = excel_cell_to_indices(start_cell)
                    end_row_idx, end_col = excel_cell_to_indices(end_cell)
                    worksheet.conditional_format(start_row_idx, start_col, end_row_idx, end_col, {
                        'type': 'no_errors',
                        'format': fc_format
                    })

            # 5) asıl dataframe(ler) varsa ekle
            if 'dataframe' in chart:
                dfs = chart['dataframe']
                if isinstance(dfs, pd.DataFrame):
                    dfs = [dfs]

                # Aggregate modda tek DF varsa 2. DF olarak "GENEL TOPLAM" ekle
                formdata = chart["query_context"].form_data
                viz_type = formdata.get("viz_type", "")

                # ------------------------------------------------------------
                #  pivot_table_v2 ÖZEL DURUMU
                # ------------------------------------------------------------
                if viz_type == "pivot_table_v2":
                    # Genelde pivot_table_v2 çıktısı tek bir DF olur
                    pivot_df = dfs[0]
                    addPivotTable(writer, pivot_df, chart["query_context"], start_row)

                    # yazılan satırların altına 2-3 satır boşluk bırak
                    start_row += len(pivot_df) + 3
                    continue  # pivot işlendikten sonra döngünün bir sonraki chart’ına geç

                # 1️⃣  Hangi anahtar(lar) sizin grafikte kullanılıyorsa ekleyin
                show_summary = (
                    formdata.get("show_totals")        # ör. pivot_table_v2
                    or formdata.get("show_summary")    # ör. bazı özel görseller
                    or formdata.get("show_column_totals")  # eski raw-mode total anahtarı
                )

                # 2️⃣  “Aggregate + tek DF + summary açık” ise GENEL TOPLAM ekle
                if is_aggregate_chart(chart["query_context"]) and len(dfs) == 1 and show_summary:
                    total_df = build_grand_total_df(dfs[0], label="GENEL TOPLAM")
                    dfs.append(total_df)

                # RAW + show_column_totals kontrolü
                form_data = chart['query_context'].form_data
                is_raw_total = (
                    form_data.get("query_mode") == "raw"
                    and form_data.get("show_column_totals") is True
                )
                # AGGREGATE kontrolü
                is_agg = is_aggregate_chart(chart["query_context"])

                for idx_df, df in enumerate(dfs):
                    titleRow = form_data.get('titleRow', False)

                    # Hesaplayacağımız tablo genişliği vs.
                    max_depth = calculate_max_depth(
                        parse_grouped_columns(form_data.get('column_config', {}))
                    )
                    if form_data.get('enableHorizontalMode', False):
                        data_width = len(df.index) + max_depth + 1
                    else:
                        data_width = len(df.columns) + 1

                    # 5.1) titleRow basma (ilk DF için)
                    if titleRow and len(titleRow) > 0 and idx_df == 0:
                        old_start = start_row
                        start_row = add_header_or_markdown(
                            worksheet,
                            start_row,
                            titleRow,
                            data_width,
                            title_format,
                            workbook
                        )
                        # Burada fazladan satırı geri al: Sadece 'toplam' modlarında
                        if is_agg or is_raw_total:
                            start_row -= 1  # fazladan gelen 1 satırı yok et

                    # 5.2) aggregate modda 2 DF varsa
                    if is_aggregate_chart(chart["query_context"]) and len(dfs) == 2:
                        if idx_df == 0:
                            # 1. DF
                            if form_data.get('enableGrouping', False) and not form_data.get('enableHorizontalMode', False):
                                add_dataframe_to_excel(writer, df, chart["query_context"], start_row)
                            elif form_data.get('enableHorizontalMode', False):
                                start_row = addHorizontalTable(
                                    writer,
                                    df,
                                    chart["query_context"],
                                    start_row
                                ) + 1
                            else:
                                addTablewithoutgrouping(writer, df, chart["query_context"], start_row)

                            if not form_data.get('enableHorizontalMode', False):
                                start_row += len(df) + max_depth + 1
                        else:
                            # 2. DF -> "GENEL TOPLAM"
                            start_row = add_right_shifted_table(writer, df, chart["query_context"], start_row, label="GENEL TOPLAM")
                            start_row += 3

                    else:
                        # Normal senaryo
                        if form_data.get('enableGrouping', False) and not form_data.get('enableHorizontalMode', False):
                            add_dataframe_to_excel(writer, df, chart["query_context"], start_row)
                        elif form_data.get('enableHorizontalMode', False):
                            start_row = addHorizontalTable(
                                writer,
                                df,
                                chart["query_context"],
                                start_row
                            ) + 1
                        else:
                            addTablewithoutgrouping(writer, df, chart["query_context"], start_row)

                        if not form_data.get('enableHorizontalMode', False):
                            start_row += len(df) + max_depth + 3

    return output.getvalue()



###############################################################################
# 11) Tek DataFrame Örneği
###############################################################################
def create_excel_with_merged_headers(df, queryContext) -> Any:
    output = io.BytesIO()
    with pd.ExcelWriter(
        output,
        engine='xlsxwriter',
        engine_kwargs={'options': {'nan_inf_to_errors': False}}
    ) as writer:
        titleRow = queryContext.form_data.get('titleRow', False)
        start_row = 0
        workbook = writer.book
        worksheet = workbook.add_worksheet('Sheet1')
        writer.sheets['Sheet1'] = worksheet

        if queryContext.form_data.get('enableHorizontalMode', False):
            markdown_format = workbook.add_format({
                'bold': True,
                'text_wrap': True,
                'valign': 'vcenter',
                'align': 'center',
                'border': 1
            })
            max_depth = calculate_max_depth(
                parse_grouped_columns(queryContext.form_data.get('column_config', {}))
            )
            if titleRow and len(titleRow) > 0:
                add_header_or_markdown(
                    worksheet,
                    start_row,
                    titleRow,
                    len(df.index) + max_depth + 1,
                    markdown_format,
                    workbook
                )
                start_row += 1

            addHorizontalTable(writer, df, queryContext, start_row)
        else:
            if titleRow and len(titleRow) > 0:
                markdown_format = workbook.add_format({
                    'text_wrap': True,
                    'valign': 'vcenter',
                    'align': 'center'
                })
                add_header_or_markdown(
                    worksheet,
                    start_row,
                    titleRow,
                    len(df.columns) + 1,
                    markdown_format,
                    workbook
                )
                start_row += 1

            add_dataframe_to_excel(writer, df, queryContext, start_row)

    return output.getvalue()
