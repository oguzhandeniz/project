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
problematic_chars_re = re.compile(r'^(?:"{2}|\s{1,})(?=[\-@+|=%])|^[\-@+|=%]')

def escape_value(value: Union[str, float, int, None]) -> str:
    if pd.isna(value):  # Eğer değer NaN ise
        return ""  # Boş string döndür
    value = str(value)  # Değeri string'e çevir

    needs_escaping = problematic_chars_re.match(value) is not None
    is_negative_number = negative_number_re.match(value) is not None

    if needs_escaping and not is_negative_number:
        value = value.replace("|", "\\|")
        value = "'" + value

    return value

def escape_string_columns(df: pd.DataFrame) -> pd.DataFrame:
    """
    Sadece string sütunlara kaçırma işlemi uygular.
    """
    string_columns = df.select_dtypes(include=[np.object])  # Sadece string sütunlar
    for col in string_columns.columns:
        df[col] = df[col].apply(escape_value)
    return df

def df_to_escaped_csv(df: pd.DataFrame, **kwargs: Any) -> str:
    """
    DataFrame'i CSV'ye kaçırarak ve BOM ekleyerek çevirir.
    """
    # Sadece string sütunlara kaçırma işlemi uygula
    df = escape_string_columns(df)

    # `encoding`, `sep` ve `index` parametrelerini kwargs'tan çıkarıp doğrudan `to_csv` fonksiyonuna ekle
    encoding = kwargs.pop('encoding', 'utf-8')
    sep = kwargs.pop('sep', ';')  # Noktalı virgül ayırıcı olarak ayarlandı
    index = kwargs.pop('index', False)

    # Tırnakları engellemek için `quoting` ve `quotechar` ayarları
    csv_data = df.to_csv(
        escapechar="\\", 
        encoding=encoding, 
        sep=sep,  # Noktalı virgül kullanılıyor
        index=index, 
        quoting=csv.QUOTE_NONE,  # Hiçbir hücrede tırnak kullanılmasın
        quotechar='',  # Tırnak karakteri boş string
        chunksize=10000, 
        **kwargs
    )

    # BOM karakterini ekleyerek CSV verisini döndür
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
    Belirli bir URL'den CSV verisini çeker.
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
    Bir grafik URL'sinden veri çekip Pandas DataFrame'e dönüştürür.
    """
    content = get_chart_csv_data(chart_url, auth_cookies)
    if content is None:
        return None

    # Veriyi doğru şekilde decode et ve DataFrame'e çevir
    result = json.loads(content.decode("utf-8"))
    pd.set_option("display.float_format", lambda x: str(x))
    df = pd.DataFrame.from_dict(result["result"][0]["data"])

    if df.empty:
        return None

    # Zaman tipi veriler için dönüştürme işlemi
    try:
        if GenericDataType.TEMPORAL in result["result"][0]["coltypes"]:
            for i in range(len(result["result"][0]["coltypes"])):
                if result["result"][0]["coltypes"][i] == GenericDataType.TEMPORAL:
                    df[result["result"][0]["colnames"][i]] = df[
                        result["result"][0]["colnames"][i]
                    ].astype("datetime64[ms]")
    except BaseException as err:
        logger.error(err)

    # Çoklu indeksleri ayarlama
    df.columns = pd.MultiIndex.from_tuples(
        tuple(colname) if isinstance(colname, list) else (colname,)
        for colname in result["result"][0]["colnames"]
    )
    df.index = pd.MultiIndex.from_tuples(
        tuple(indexname) if isinstance(indexname, list) else (indexname,)
        for indexname in result["result"][0]["indexnames"]
    )
    return df
