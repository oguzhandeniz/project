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
import numbers
from typing import Any, List, Dict
import pandas as pd
import re
import math
import numpy as np
import logging

from html.parser import HTMLParser
from superset.charts.post_processing import table
from xlsxwriter.utility import xl_range

# İstediğiniz şekilde özelleştirebilirsiniz
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

###############################################################################
# TEMEL FONKSİYONLAR
###############################################################################
def df_to_excel(df: pd.DataFrame, **kwargs: Any) -> Any:
    """
    Basit DataFrame -> Excel çevirimi.
    Superset'te ya da test ortamında kullanılabilir.
    """
    output = io.BytesIO()
    # timezones are not supported
    for column in df.select_dtypes(include=["datetimetz"]).columns:
        df[column] = df[column].astype(str)

    with pd.ExcelWriter(
        output,
        engine="xlsxwriter",
        engine_kwargs={'options': {'nan_inf_to_errors': False}}  # NaN/Inf hatalarını baskılar
    ) as writer:
        df.to_excel(writer, **kwargs)

    return output.getvalue()


def pixels_to_excel_width(pixels):
    """
    Piksel genişliğini Excel sütun genişliğine dönüştürür.
    İsterseniz buradaki çarpanları değiştirebilirsiniz.
    """
    return (pixels - 5) / 7 + 1


###############################################################################
# ADDHEADER MAKRONU İÇİN YENİ YARDIMCI FONKSİYONLAR
###############################################################################
def parse_add_header_instructions(markdown_content: str):
    """
    Örnek AddHeader kullanımı:
      [AddHeader:"Kabul Edilen Yatırım Harcaması",A1,F1]
      [AddHeader:"Yıllar",A3,F3]
      [AddHeader:" ",A4]
      vb.

    Dönüş: (temizlenmiş_markdown, [ { 'text':..., 'start_cell':..., 'end_cell':... }, ... ])
    """
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
        return ''  # Bu makroyu Markdown'dan tamamen çıkar (görünmesin)

    cleaned_text = pattern.sub(replace_func, markdown_content)
    return cleaned_text.strip(), instructions


def apply_add_header_instructions(worksheet, workbook, instructions):
    """
    instructions: [
      { 'text': 'Kabul Edilen Yatırım...', 'start_cell': 'A1', 'end_cell': 'F1' },
      { 'text': 'Yıllar', 'start_cell': 'A3', 'end_cell': 'F3' },
      ...
    ]
    """
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
            # Eğer A1 gibi başlangıç hücresi bile verilmediyse, skip
            continue

        start_row, start_col = excel_cell_to_indices(start_cell)
        if end_cell:
            end_row, end_col = excel_cell_to_indices(end_cell)
            # Merge işlemi
            try:
                worksheet.merge_range(start_row, start_col, end_row, end_col, text, merge_format)
            except Exception as e:
                if "overlaps" in str(e):
                    logger.warning(f"AddHeader çakışma uyarısı: Merge range '{start_cell}:{end_cell}' overlaps. Geçiliyor.")
                else:
                    raise
        else:
            # Tek hücre
            try:
                worksheet.write(start_row, start_col, text, single_format)
            except Exception as e:
                if "overlaps" in str(e):
                    logger.warning(f"AddHeader çakışma uyarısı: Hücre '{start_cell}' overlaps. Geçiliyor.")
                else:
                    raise


###############################################################################
# GRUPLU KOLON PARSE FONKSİYONU
###############################################################################
def parse_grouped_columns(column_config: Dict[str, Any]) -> Dict:
    """
    Superset'teki 'groups' parametresini hiyerarşik bir sözlüğe dönüştürür.
    Örnek:
       "city": {"groups": "Country, Region"}
    =>
       {
         "Country": {
           "Region": {
             "city": None
           }
         }
       }
    """
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
    """
    Yukarıda parse_grouped_columns ile oluşan sözlüğün en derin seviyesini döndürür.
    """
    def depth(d):
        if isinstance(d, dict) and d:
            return 1 + max(depth(v) for v in d.values())
        else:
            return 0
    return depth(grouped_columns)


###############################################################################
# EXCEL HÜCRE İNDEKS DÖNÜŞÜMLERİ
###############################################################################
def indices_to_excel_cell(row_idx: int, col_idx: int) -> str:
    """
    (0-based) row, col indekslerini -> 'A1', 'B2' gibi Excel hücre referansına çevirir.
    Örnek: (0, 0) -> A1, (0, 1) -> B1, (10, 0) -> A11
    """
    col_ref = ""
    c = col_idx
    while c >= 0:
        r = c % 26
        col_ref = chr(r + ord('A')) + col_ref
        c = (c // 26) - 1

    row_ref = str(row_idx + 1)  # Excel satırları 1'den başlar
    return f"{col_ref}{row_ref}"


def excel_cell_to_indices(cell: str) -> tuple[int, int]:
    """
    'A1' gibi Excel hücre adresini (row, col) şeklinde integer indekslere çevirir (0-tabanlı).
    """
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


###############################################################################
# MARKDOWN/HEADER YORUMLAMA ve RENK/POZİSYON DİREKTİFLERİ
###############################################################################
def parse_position_syntax(markdown_content: str) -> tuple[str, str, str]:
    """
    [Position:A1,B2] gibi bir ifade varsa, 
    (temizlenmiş_metin, 'A1', 'B2') döndürür.
    Yoksa (orijinal_metin, None, None).
    """
    pattern = re.compile(r"\[Position:([A-Za-z]+\d+),([A-Za-z]+\d+)\]")
    match = pattern.search(markdown_content)
    if match:
        start_cell, end_cell = match.groups()
        cleaned_markdown = pattern.sub('', markdown_content).strip()
        return cleaned_markdown, start_cell, end_cell
    return markdown_content, None, None


def parse_background_color_syntax(markdown_content: str) -> tuple[str, List[Dict]]:
    """
    [BackgroundColor:#FF0000,A1,B2] varsa yakalar.
    """
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
    """
    [FontColor:#00FF00,A1,B2] gibi font renk direktiflerini parse eder.
    """
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
# HTML -> RICH STRING PARSE (B, I, U, SPAN, H1/H2/H3, BR, P, DIV...)
###############################################################################
class RichStringHTMLParser(HTMLParser):
    """
    HTML etiketlerini XlsxWriter'ın write_rich_string formatına dönüştürür.
    """
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
        # <b> / <strong>
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
            # style="color: #FF0000"
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
            # style="text-align:center"
            style = attrs.get('style', '')
            align_match = re.search(r'text-align\s*:\s*(left|center|right)', style, re.IGNORECASE)
            if align_match:
                alignment = align_match.group(1)
                self.cell_format = {'align': alignment, 'valign': 'vcenter'}
        elif tag == 'p':
            # Paragraf
            self.format_stack.append(self.paragraph_format.copy())
        elif tag == 'br':
            self.rich_string.append('\n')  # Yeni satır

    def handle_endtag(self, tag):
        # Format stack'ten pop
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
    """
    HTML içeriğini RichStringHTMLParser ile parse eder.
    Döndürür: (alignment_format_dict, [rich_string_dizisi])
    """
    parser = RichStringHTMLParser(workbook)
    parser.feed(html_content)
    parser.close()
    return parser.cell_format, parser.rich_string


###############################################################################
# HEADERS / MARKDOWN EKLEME
###############################################################################
def add_header_or_markdown(worksheet, row, content, max_columns, cell_format, workbook):
    """
    Tek satır veya liste şeklindeki 'content' i Excel'e yazar.
    - [AddHeader:"Text",A1,F1] makrosu parse edilir ve işlenir.
    - [Position:A1,B2] vb. syntax'ı parse ederek istenen aralığa merge eder.
    - [BackgroundColor:...], [FontColor:...] direktiflerini uygular.
    - HTML parse edilip write_rich_string ile hücreye yazdırılabilir.
    - max_columns > 1 ise, tek satır için yatay merge yapılır.
    - Dönüş: Excel'de yazıldıktan sonraki "next row" değeri.
    """
    if isinstance(content, str):
        # ÖNCE: AddHeader makrolarını parse edelim
        cleaned_content, add_header_instructions = parse_add_header_instructions(content)
        # Bulduğumuz AddHeader’ları hemen uygula (merge vb.)
        apply_add_header_instructions(worksheet, workbook, add_header_instructions)

        # 1) Position
        cleaned_content, start_cell, end_cell = parse_position_syntax(cleaned_content)
        # 2) Background
        cleaned_content, background_colors = parse_background_color_syntax(cleaned_content)
        # 3) Font color
        cleaned_content, font_colors = parse_font_color_syntax(cleaned_content)
        # 4) HTML -> rich string
        alignment_format, rich_string = parse_html_to_rich_string(workbook, cleaned_content)

        # Pozisyona göre merge mi?
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
                    logger.warning(f"add_header_or_markdown çakışma uyarısı: '{start_cell}:{end_cell}' overlaps. Geçiliyor.")
                else:
                    raise

            if rich_string:
                worksheet.write_rich_string(start_row_idx, start_col, *rich_string, merged_format)
            else:
                worksheet.write(start_row_idx, start_col, cleaned_content, merged_format)

            # Arka plan rengi
            for bg in background_colors:
                color = bg['color']
                bg_start_row, bg_start_col = excel_cell_to_indices(bg['start_cell'])
                bg_end_row, bg_end_col = excel_cell_to_indices(bg['end_cell'])
                bg_format = workbook.add_format({'bg_color': color})
                worksheet.conditional_format(bg_start_row, bg_start_col, bg_end_row, bg_end_col, {
                    'type': 'no_errors',
                    'format': bg_format
                })
            # Yazı rengi
            for fc in font_colors:
                color = fc['color']
                fc_start_row, fc_start_col = excel_cell_to_indices(fc['start_cell'])
                fc_end_row, fc_end_col = excel_cell_to_indices(fc['end_cell'])
                fc_format = workbook.add_format({'font_color': color})
                worksheet.conditional_format(fc_start_row, fc_start_col, fc_end_row, fc_end_col, {
                    'type': 'no_errors',
                    'format': fc_format
                })

            return end_row_idx + 1  # Bir sonraki uygun satır

        else:
            # Tek satır merge veya normal yaz
            if '<' in cleaned_content and '>' in cleaned_content:
                # HTML parse edildiyse rich_string
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
                            logger.warning(f"add_header_or_markdown çakışma uyarısı: '{row},0 -> {row},{max_columns-1}' overlaps. Geçiliyor.")
                        else:
                            raise

                    if rich_string:
                        worksheet.write_rich_string(row, 0, *rich_string, merged_format)
                    else:
                        worksheet.write(row, 0, cleaned_content, merged_format)
                else:
                    single_format = workbook.add_format({
                        'align': alignment_format.get('align', 'left') if alignment_format else 'left',
                        'valign': alignment_format.get('valign', 'vcenter') if alignment_format else 'vcenter',
                        'text_wrap': True
                    })
                    worksheet.write_rich_string(row, 0, *rich_string, single_format) if rich_string else \
                        worksheet.write(row, 0, cleaned_content, single_format)
            else:
                # Düz metin
                if max_columns > 1:
                    try:
                        worksheet.merge_range(row, 0, row, max_columns - 1, cleaned_content, cell_format)
                    except Exception as e:
                        if "overlaps" in str(e):
                            logger.warning(f"add_header_or_markdown çakışma uyarısı: '{row},0 -> {row},{max_columns-1}' overlaps. Geçiliyor.")
                        else:
                            raise
                else:
                    worksheet.write(row, 0, cleaned_content, cell_format)

            row_height = 20 * (cleaned_content.count('\n') + 1)
            worksheet.set_row(row, row_height)

            # Renk direktiflerini uygulayalım
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
        # Liste halinde satır satır yazma
        # (İsterseniz AddHeader parse işlemini her satırda da uygulayabilirsiniz.)
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
                    'valign': alignment_format.get('valign', 'vcenter') if alignment_format else 'vcenter',
                    'text_wrap': True
                })
                try:
                    worksheet.merge_range(start_row_idx, start_col, end_row_idx, end_col, '', merged_format)
                except Exception as e:
                    if "overlaps" in str(e):
                        logger.warning(f"add_header_or_markdown çakışma uyarısı (liste): '{start_cell}:{end_cell}' overlaps. Geçiliyor.")
                    else:
                        raise

                if rich_string:
                    worksheet.write_rich_string(start_row_idx, start_col, *rich_string, merged_format)
                else:
                    worksheet.write(start_row_idx, start_col, cleaned_line, merged_format)

                # Renk uygulama
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
                            'valign': alignment_format.get('valign', 'vcenter') if alignment_format else 'vcenter',
                            'text_wrap': True
                        })
                        try:
                            worksheet.merge_range(row, 0, row, max_columns - 1, '', merged_format)
                        except Exception as e:
                            if "overlaps" in str(e):
                                logger.warning(f"add_header_or_markdown çakışma uyarısı (liste HTML): '{row},0 -> {row},{max_columns-1}' overlaps. Geçiliyor.")
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
                                logger.warning(f"add_header_or_markdown çakışma uyarısı (liste düz): '{row},0 -> {row},{max_columns-1}' overlaps. Geçiliyor.")
                            else:
                                raise
                    else:
                        worksheet.write(row, 0, cleaned_line, cell_format)

                row_height = 20 * (cleaned_line.count('\n') + 1)
                worksheet.set_row(row, row_height)

                # Renk uygulama
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
# VERİ HAZIRLAMA, TEMİZLEME, FORMATLAMA
###############################################################################
def convert_html_links(df):
    """
    <a href="...">metin</a> -> (url, 'metin') dönüştürmesi.
    """
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
    """
    NaN/Inf gibi değerleri metne çevirir.
    """
    if isinstance(value, (float, np.floating)):
        if math.isnan(value) or np.isnan(value):
            return ''
        if math.isinf(value) or np.isinf(value):
            return 'Infinity' if value > 0 else '-Infinity'
    return value


def clean_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Inf -> NaN dönüştürme vs.
    """
    df = df.replace([np.inf, -np.inf], np.nan)
    return df


def d3_to_excel_format(d3_format):
    """
    D3 formatlarını Excel'e çevirir (',.2f' -> '#,##0.00' vb.)
    """
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
        '%d-%m-%Y %H:%M:%S': 'dd-mm-yyyy hh:mm:ss',
    }
    date_time_pattern = re.compile(r'%[dmyHMS\- :]+')
    if date_time_pattern.fullmatch(d3_format):
        excel_format = d3_format.replace('%d', 'dd') \
                                .replace('%m', 'mm') \
                                .replace('%Y', 'yyyy') \
                                .replace('%H', 'hh') \
                                .replace('%M', 'mm') \
                                .replace('%S', 'ss')
        return excel_format
    return format_map.get(d3_format, '#,##0')


def get_column_formats(workbook, df, formdata, alignment_formats):
    """
    Sütuna göre (numeric, datetime, vs.) formatları (d3NumberFormat, horizontalAlign) uygular.
    """
    column_formats = {}
    column_config = formdata.get('column_config', {})
    number_alignment_format_cache = {}
    datetime_alignment_format_cache = {}

    numeric_columns = df.select_dtypes(include=['number']).columns.tolist()
    datetime_columns = df.select_dtypes(include=['datetime']).columns.tolist()

    for column in df.columns:
        config = column_config.get(column, {})
        d3_format = config.get('d3NumberFormat')
        horizontal_align = config.get('horizontalAlign', 'left')

        if d3_format and column in numeric_columns:
            excel_format_str = d3_to_excel_format(d3_format)
            format_key = (excel_format_str, horizontal_align)
            if format_key not in number_alignment_format_cache:
                number_alignment_format_cache[format_key] = workbook.add_format({
                    'num_format': excel_format_str,
                    'align': horizontal_align,
                    'valign': 'vcenter',
                    'border': 1
                })
            column_formats[column] = number_alignment_format_cache[format_key]
        elif column in datetime_columns:
            d3_format = config.get('d3NumberFormat', '%d-%m-%Y %H:%M:%S')
            excel_format_str = d3_to_excel_format(d3_format)
            format_key = (excel_format_str, horizontal_align)
            if format_key not in datetime_alignment_format_cache:
                datetime_alignment_format_cache[format_key] = workbook.add_format({
                    'num_format': excel_format_str,
                    'align': horizontal_align,
                    'valign': 'vcenter',
                    'border': 1
                })
            column_formats[column] = datetime_alignment_format_cache[format_key]
        else:
            column_formats[column] = alignment_formats.get(
                horizontal_align,
                workbook.add_format({
                    'border': 1,
                    'align': horizontal_align,
                    'valign': 'vcenter'
                })
            )
    return column_formats


def remove_duplicates_in_grouped_columns(df: pd.DataFrame,
                                         column_config: Dict[str, Any],
                                         anchor_column: str) -> pd.DataFrame:
    """
    Aynı anchor_column değeri devam ettiği sürece, allowRowGrouping=True
    işaretli sütunlardaki *sayısal* (int/float) değerleri tekrarlamaz (None yapar).
    Metinsel değerler ise korunur.
    """
    if not anchor_column or anchor_column not in df.columns:
        return df  # anchor_column hatalıysa değiştirmeden döndür

    last_anchor_val = None
    for i in range(len(df)):
        anchor_val = df.iloc[i][anchor_column]

        # Eğer bu satırın anchor değeri bir önceki satırla aynıysa...
        if anchor_val == last_anchor_val:
            # Sütunları gez
            for col, config in column_config.items():
                # allowRowGrouping=True ise...
                if config.get('allowRowGrouping', False):
                    val = df.iloc[i][col]
                    # val sayısal mı?
                    if isinstance(val, (int, float, np.integer, np.floating)):
                        # Tekrarlanan sayısal değeri None yapıyoruz
                        df.at[i, col] = None
                    else:
                        pass
        else:
            # Farklı anchor değeri => bu satırı sakla, sonrakilerle karşılaştır
            last_anchor_val = anchor_val

    return df


###############################################################################
# ANA DATAFRAME'İ EXCEL'E EKLEME (GRUPLU BAŞLIK, BOŞLUKSUZ MERGE)
###############################################################################
def add_dataframe_to_excel(writer, df, queryContext, start_row=0, **kwargs):
    """
    DataFrame'i:
      - Gruplanmış başlıklarla (groups)
      - Hem alttan-yukarıya hem üstten-aşağıya doldurma (3 satırlık blok vs.)
      - Yatay/dikey merge
      - allowRowGrouping=True sütunlarında dikey merge
      - Row grouping (dikey merge) sırasında hangi aralıkların merge edildiğini Excel koordinatı olarak logluyoruz.
    """
    # -- Bazı ön hazırlıklar (formdata, column_config, grouping vb.) --
    formdata = queryContext.form_data
    column_config = formdata.get('column_config', {})
    grouped_columns = parse_grouped_columns(column_config)
    
    if any('groups' in config and config['groups'] for config in column_config.values()):
        max_depth = max(
            len(config['groups'].split(','))
            for config in column_config.values()
            if 'groups' in config and config['groups']
        )
    else:
        max_depth = 0

    # "Total" satırı eklenecek mi? (örnek)
    has_total_row = False
    if formdata.get('query_mode', '') == 'raw' and formdata.get('show_column_totals', False):
        pass

    # DataFrame'i temizle, HTML linkleri dönüştür
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

    alignment_formats = {}
    for align in ['left', 'center', 'right']:
        alignment_formats[align] = workbook.add_format({
            'border': 1,
            'align': align,
            'valign': 'vcenter'
        })

    column_formats = get_column_formats(workbook, df, formdata, alignment_formats)

    # 1) Header gruplama hazırlıkları
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

    # Grupları cell_values'e işleme
    for col_idx, column_name in enumerate(df.columns):
        grp = find_group_for_column(grouped_columns, column_name)
        if grp:
            for depth, g_ in enumerate(grp):
                cell_values[depth][col_idx] = g_ or ''
        cell_values[max_depth][col_idx] = column_name or ''

    # Boşluk doldurma - alttan yukarıya
    for row_idx in range(max_depth - 1, -1, -1):
        for col_idx in range(len(df.columns)):
            if not cell_values[row_idx][col_idx].strip():
                cell_values[row_idx][col_idx] = cell_values[row_idx + 1][col_idx]

    # Boşluk doldurma - üstten aşağıya
    for row_idx in range(1, max_depth + 1):
        for col_idx in range(len(df.columns)):
            if not cell_values[row_idx][col_idx].strip():
                cell_values[row_idx][col_idx] = cell_values[row_idx - 1][col_idx]

    # 2) Yatay Merge (header)
    for row in range(max_depth + 1):
        start_col = 0
        while start_col < len(df.columns):
            end_col = start_col
            while (end_col + 1 < len(df.columns) and
                   cell_values[row][end_col + 1] == cell_values[row][start_col]):
                end_col += 1
            if cell_values[row][start_col]:
                if start_col != end_col:
                    try:
                        worksheet.merge_range(
                            start_row + row, 
                            start_col,
                            start_row + row,
                            end_col,
                            cell_values[row][start_col],
                            merge_format
                        )
                    except Exception as e:
                        if "overlaps" in str(e):
                            logger.warning(f"add_dataframe_to_excel header merge çakışma: '{start_row+row},{start_col} -> {start_row+row},{end_col}' overlaps.")
                        else:
                            raise
                else:
                    worksheet.write(
                        start_row + row,
                        start_col,
                        cell_values[row][start_col],
                        merge_format
                    )
            start_col = end_col + 1

    # 3) Dikey Merge (header)
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
                    try:
                        worksheet.merge_range(
                            start_row + merge_start, col_idx,
                            start_row + merge_end,   col_idx,
                            cell_values[merge_start][col_idx],
                            merge_format
                        )
                    except Exception as e:
                        if "overlaps" in str(e):
                            logger.warning(f"add_dataframe_to_excel header dikey merge çakışma: '{start_row+merge_start},{col_idx} -> {start_row+merge_end},{col_idx}' overlaps.")
                        else:
                            raise
                else:
                    worksheet.write(
                        start_row + merge_start,
                        col_idx,
                        cell_values[merge_start][col_idx],
                        merge_format
                    )
            row_idx = merge_end + 1

    # data_start_row
    data_start_row = start_row + max_depth + 1

    # 4) SATIR GRUPLAMA (ROW GROUPING) -> allowRowGrouping=True
    try:
        anchor_column = formdata.get('row_grouping_column')
        if anchor_column:
            anchor_column_index = df.columns.get_loc(anchor_column)
        else:
            anchor_column_index = 0
    except:
        anchor_column_index = 0

    for col_idx, column_name in enumerate(df.columns):
        if column_name in column_config and column_config[column_name].get('allowRowGrouping', False):
            logger.info(f"Row grouping aktif: Kolon adı = '{column_name}'")

            start_merge_row = None
            current_value = None
            for row_idx in range(len(df)):
                value = df.iloc[row_idx, col_idx]
                anchor_value = df.iloc[row_idx, anchor_column_index]

                if (
                    value == current_value
                    and not pd.isna(value)
                    and not pd.isna(anchor_value)
                    and anchor_value == df.iloc[start_merge_row, anchor_column_index]
                ):
                    continue
                else:
                    if start_merge_row is not None:
                        if row_idx - 1 != start_merge_row:
                            try:
                                worksheet.merge_range(
                                    data_start_row + start_merge_row, col_idx,
                                    data_start_row + row_idx - 1, col_idx,
                                    current_value, merge_format
                                )
                            except Exception as e:
                                if "overlaps" in str(e):
                                    logger.warning(f"add_dataframe_to_excel satır birleştirme çakışma: {data_start_row+start_merge_row},{col_idx} -> {data_start_row+row_idx-1},{col_idx}")
                                else:
                                    raise

                            start_cell = indices_to_excel_cell(data_start_row + start_merge_row, col_idx)
                            end_cell = indices_to_excel_cell(data_start_row + row_idx - 1, col_idx)
                            logger.info(
                                f"Kolon '{column_name}' => satır birleştirme: "
                                f"{start_cell} ile {end_cell}, değer='{current_value}'"
                            )
                        else:
                            single_cell = indices_to_excel_cell(data_start_row + start_merge_row, col_idx)
                            worksheet.write(
                                data_start_row + start_merge_row,
                                col_idx,
                                current_value,
                                merge_format
                            )
                            logger.info(
                                f"Kolon '{column_name}' => tek satıra yazıldı: {single_cell}, değer='{current_value}'"
                            )

                    current_value = value
                    start_merge_row = row_idx

            # Son grup
            if start_merge_row is not None and (not has_total_row):
                if start_merge_row != len(df) - 1:
                    try:
                        worksheet.merge_range(
                            data_start_row + start_merge_row, col_idx,
                            data_start_row + len(df) - 1, col_idx,
                            current_value, merge_format
                        )
                    except Exception as e:
                        if "overlaps" in str(e):
                            logger.warning(f"add_dataframe_to_excel satır birleştirme çakışma (SON GRUP): {data_start_row+start_merge_row},{col_idx} -> {data_start_row+len(df)-1},{col_idx}")
                        else:
                            raise

                    start_cell = indices_to_excel_cell(data_start_row + start_merge_row, col_idx)
                    end_cell = indices_to_excel_cell(data_start_row + len(df) - 1, col_idx)
                    logger.info(
                        f"Kolon '{column_name}' => satır birleştirme (SON GRUP): "
                        f"{start_cell} ile {end_cell}, değer='{current_value}'"
                    )
                else:
                    single_cell = indices_to_excel_cell(data_start_row + start_merge_row, col_idx)
                    worksheet.write(
                        data_start_row + start_merge_row,
                        col_idx,
                        current_value,
                        merge_format
                    )
                    logger.info(
                        f"Kolon '{column_name}' => tek satıra yazıldı (SON GRUP): "
                        f"{single_cell}, değer='{current_value}'"
                    )

    # (Opsiyonel) Tekrarlı hücre değerlerini silmek isterseniz:
    remove_duplicates_in_grouped_columns(df, column_config, anchor_column)

    # 5) Veri Yazma (body)
    for row_num, row_data in enumerate(df.itertuples(index=False)):
        for col_num, value in enumerate(row_data):
            cell_row = data_start_row + row_num
            cell_col = col_num
            val = value
            col_name = df.columns[col_num]
            fmt = column_formats.get(col_name, cell_format_with_borders)

            if pd.isna(val):
                worksheet.write_blank(cell_row, cell_col, None, null_format)
            elif isinstance(val, tuple):
                worksheet.write_url(cell_row, cell_col, val[0], string=val[1], cell_format=link_format)
            elif isinstance(val, pd.Timestamp):
                worksheet.write_datetime(cell_row, cell_col, val, fmt)
            elif isinstance(val, numbers.Number):
                worksheet.write_number(cell_row, cell_col, val, fmt)
            else:
                worksheet.write(cell_row, cell_col, val, fmt)

    # 6) Sütun Genişliği
    for i, c_ in enumerate(df.columns):
        if c_ in column_config and 'columnWidth' in column_config[c_]:
            w_ = column_config[c_]['columnWidth'] or 15
            worksheet.set_column(i, i, w_)
        else:
            worksheet.set_column(i, i, 15)


###############################################################################
# HORIZONTAL TABLE (enableHorizontalMode)
###############################################################################
def addHorizontalTable(writer, df, queryContext, start_row=0, **kwargs):
    """
    enableHorizontalMode=True durumunda her sütunu bir satır gibi yazar.
    (Bu kısımda da basit mantık kullanıyoruz.)
    """
    worksheet = writer.sheets['Sheet1'] if 'Sheet1' in writer.sheets else None
    workbook = writer.book
    formdata = queryContext.form_data

    # Formatlar
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

    # Gruplar
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

    # Sütun -> satır
    for column in df.columns:
        groups = column_groups[column]
        # Üst grupları yaz
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

        # Kolon ismi
        worksheet.write(current_row, max_depth, column, header_format)

        # Post-processing
        df = table(df, formdata)
        convert_html_links(df)

        # Kolon verisi yanyana
        for data_idx, value in enumerate(df[column]):
            if isinstance(value, tuple):
                worksheet.write_url(current_row, max_depth + 1 + data_idx, value[0], string=value[1], cell_format=link_format)
            else:
                safe_val = safe_value(value)
                worksheet.write(current_row, max_depth + 1 + data_idx, safe_val, cell_format)

        current_row += 1

    # Otomatik sütun genişliği
    for col in range(max_depth + 1):
        worksheet.set_column(col, col, 30)
    for col in range(max_depth + 1, max_depth + 1 + len(df.columns)):
        worksheet.set_column(col, col, 15)

    return current_row


###############################################################################
# GRUPSUZ TABLO
###############################################################################
def addTablewithoutgrouping(writer, df, formdata, start_row=0, **kwargs):
    df.to_excel(writer, index=True, startrow=start_row + 1, header=True, sheet_name='Sheet1')


def apply_white_background_to_all_cells(worksheet, white_fill_format, max_row=1200, max_col=200):
    for row in range(max_row):
        for col in range(max_col):
            worksheet.write_blank(row, col, None, white_fill_format)


###############################################################################
# BİRDEN FAZLA TABLOYU TEK EXCEL DOSYASINA EKLE
###############################################################################
def create_excel_for_dashboard(dataframes, **kwargs) -> Any:
    """
    dataframes: [
      {
        "header": "Metin",
        "markdown": "Bazı <b>HTML</b>",
        "background_colors": [{"color":"#FF0000","start_cell":"A1","end_cell":"B2"}],
        "font_colors": [...],
        "dataframe": <pandas DataFrame>,
        "query_context": <superset context>,
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

        # Tüm hücreler beyaz
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
        link_format = workbook.add_format({
            'font_color': 'blue',
            'underline': True
        })

        for chart in dataframes:
            # 1) Header
            if 'header' in chart:
                start_row = add_header_or_markdown(
                    worksheet, 
                    start_row, 
                    chart['header'], 
                    max_columns, 
                    header_format,
                    workbook
                )
            # 2) Markdown
            if 'markdown' in chart:
                start_row = add_header_or_markdown(
                    worksheet, 
                    start_row, 
                    chart['markdown'], 
                    max_columns, 
                    markdown_format,
                    workbook
                )
            # 3) Renk direktifleri
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

            # 4) DataFrame
            if 'dataframe' in chart:
                form_data = chart['query_context'].form_data
                titleRow = form_data.get('titleRow', False)

                # max_depth
                max_depth = calculate_max_depth(
                    parse_grouped_columns(form_data.get('column_config', {}))
                )

                # Horizontal Mode -> satırlar sütun olur
                if form_data.get('enableHorizontalMode', False):
                    data_width = len(chart['dataframe'].index) + max_depth + 1
                    max_columns = max(max_columns, data_width)
                else:
                    data_width = len(chart['dataframe'].columns) + 1
                    max_columns = max(max_columns, len(chart['dataframe'].columns))

                # Title satırı
                if titleRow and len(titleRow) > 0:
                    add_header_or_markdown(
                        worksheet, 
                        start_row, 
                        titleRow, 
                        data_width, 
                        title_format,
                        workbook
                    )
                    start_row += 1

                # Gruplama/Horizontal
                if form_data.get('enableGrouping', False) and (not form_data.get('enableHorizontalMode', False)):
                    add_dataframe_to_excel(writer, chart['dataframe'], chart['query_context'], start_row)
                elif form_data.get('enableHorizontalMode', False):
                    start_row = addHorizontalTable(
                        writer,
                        chart['dataframe'],
                        chart['query_context'],
                        start_row
                    ) + 1
                else:
                    # Gruplama yok
                    addTablewithoutgrouping(writer, chart['dataframe'], chart['query_context'], start_row)

                # Yatay tablo değilse, tablo kadar satır ilerle
                if not form_data.get('enableHorizontalMode', False):
                    start_row += len(chart['dataframe']) + max_depth + 3

    return output.getvalue()


###############################################################################
# TEK DATAFRAME'İ MERGE EDİLMİŞ BAŞLIKLARLA EXCEL'E EKLEME
###############################################################################
def create_excel_with_merged_headers(df, queryContext) -> Any:
    """
    Tek bir DataFrame'i gruplu başlıklarla Excel'e yazmak için kısaltılmış örnek fonksiyon.
    Boşluk kalmasın diye add_dataframe_to_excel fonksiyonunun değiştirilmiş halini kullanıyoruz.
    """
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
            # Yatay tablo
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
            # Dikey (normal) tablo, boşluksuz merge
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