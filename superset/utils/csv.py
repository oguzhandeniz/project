import logging
import re
import urllib.request
from typing import Any, Optional, Union
from urllib.error import URLError

import numpy as np
import pandas as pd
import csv  # CSV modülü import ediliyor

from superset.utils import json
from superset.utils.core import GenericDataType

logger = logging.getLogger(__name__)

# Düzenli ifadeler tanımları
negative_number_re = re.compile(r"^-[0-9.]+$")
problematic_chars_re = re.compile(
    r'^(?:"{2}|\s{1,})(?=[\-@+|=%])|^[\-@+|=%]'
)

def escape_value(value: Union[str, float, int, None]) -> str:
    """
    Yalnızca string değerler için CSV enjeksiyonu koruması uygulayan
    yardımcı fonksiyon.
    """
    if pd.isna(value):
        return ""

    value = str(value)

    needs_escaping = problematic_chars_re.match(value) is not None
    is_negative_number = negative_number_re.match(value) is not None

    if needs_escaping and not is_negative_number:
        value = value.replace("|", "\\|")
        value = "'" + value

    return value

def escape_string_columns(df: pd.DataFrame) -> pd.DataFrame:
    """
    DataFrame içindeki sadece string/object kolonlarını gezer 
    ve oradaki değerleri `escape_value` ile temizler.
    """
    string_columns = df.select_dtypes(include=[object])
    for col in string_columns.columns:
        df[col] = df[col].apply(escape_value)
    return df

def df_to_escaped_csv(df: pd.DataFrame, **kwargs: Any) -> str:
    """
    DataFrame'i, sadece string kolonları "escape" ederek
    CSV formatına dönüştürür ve başına BOM ekler.
    """

    # 1) Sadece metin kolonlarını zararlı karakterlerden temizle
    df = escape_string_columns(df)

    # 2) Sık kullanılan CSV parametrelerini kwargs içinden çek veya varsayılana ayarla
    encoding = kwargs.pop('encoding', 'utf-8')
    sep = kwargs.pop('sep', ';')
    index = kwargs.pop('index', False)

    # 3) Ondalık ayracı ve float formatını belirleyin:
    #    Excel'in Türkçe locale'de otomatik parse etmesi için:
    #    decimal=',' kullanabilirsiniz.
    #
    #    İster nokta (.) ister virgül (,) kullanın, Excel "Veri Al" sihirbazından 
    #    manuel düzeltmezseniz yine yanlışa düşebilir. 
    #
    #    Örnek: float_format='%.6f' => virgülden sonra 6 basamak
    float_format = kwargs.pop('float_format', '%.15g')
    decimal = kwargs.pop('decimal', ',')

    # 4) CSV dönüştürme
    csv_data = df.to_csv(
        escapechar="\\",
        encoding=encoding,
        sep=sep,
        index=index,
        quoting=csv.QUOTE_NONE,
        quotechar='',
        float_format=float_format,
        decimal=decimal,       # <-- EKLENDİ: Ondalık ayracı virgül yap
        chunksize=10000,
        **kwargs
    )

    # 5) Başına BOM ekleyerek geri döndür
    bom = '\ufeff'
    return bom + csv_data

def save_df_as_csv_with_bom(df: pd.DataFrame, file_path: str) -> None:
    """
    DataFrame'i CSV formatında BOM karakteri ile kaydeder.
    """
    csv_content = df_to_escaped_csv(df)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(csv_content)

def get_chart_csv_data(
    chart_url: str, auth_cookies: Optional[dict[str, str]] = None
) -> Optional[bytes]:
    """
    Belirli bir URL'den CSV verisini bytes olarak çeker.
    """
    content = None
    if auth_cookies:
        opener = urllib.request.build_opener()
        cookie_str = ";".join([f"{key}={val}" for key, val in auth_cookies.items()])
        opener.addheaders.append(("Cookie", cookie_str))
        response = opener.open(chart_url)
        content = response.read()
        if response.getcode() != 200:
            raise URLError(response.getcode())
    if content:
        return content
    return None

def get_chart_dataframe(
    chart_url: str, auth_cookies: Optional[dict[str, str]] = None
) -> Optional[pd.DataFrame]:
    """
    Bir grafik URL'sinden veri çekip içerdiği JSON formatındaki
    tablo verisini Pandas DataFrame'e dönüştürür.
    """
    content = get_chart_csv_data(chart_url, auth_cookies)
    if content is None:
        return None

    # 1) JSON olarak decode et
    result = json.loads(content.decode("utf-8"))

    # 2) JSON'daki "data" anahtarından DataFrame oluştur
    df = pd.DataFrame.from_dict(result["result"][0]["data"])
    if df.empty:
        return None

    # 3) Zaman tiplerini datetime dönüştür
    try:
        if GenericDataType.TEMPORAL in result["result"][0]["coltypes"]:
            for i, coltype in enumerate(result["result"][0]["coltypes"]):
                if coltype == GenericDataType.TEMPORAL:
                    colname = result["result"][0]["colnames"][i]
                    df[colname] = df[colname].astype("datetime64[ms]")
    except BaseException as err:
        logger.error(err)

    # 4) Çoklu (hiyerarşik) kolon ve indeks ayarlaması
    df.columns = pd.MultiIndex.from_tuples(
        tuple(col) if isinstance(col, list) else (col,)
        for col in result["result"][0]["colnames"]
    )
    df.index = pd.MultiIndex.from_tuples(
        tuple(ind) if isinstance(ind, list) else (ind,)
        for ind in result["result"][0]["indexnames"]
    )

    return df
    