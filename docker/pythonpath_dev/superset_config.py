import logging
import redis
from datetime import timedelta
from flask_caching.backends.rediscache import RedisCache
from celery.schedules import crontab


logger = logging.getLogger()


# ---------------------------------------------------------------------------
# 1. LIMIT & PERFORMANCE
# ---------------------------------------------------------------------------
ROW_LIMIT = 50_000_000
DISPLAY_MAX_ROW = 50_000_000
SQL_MAX_ROW = 50_000_000
DEFAULT_SQLLAB_LIMIT = 1_000
SAMPLES_ROW_LIMIT = 50_000_000
NATIVE_FILTER_DEFAULT_ROW_LIMIT = 50_000_000
FILTER_SELECT_ROW_LIMIT = 50_000_000
QUERY_SEARCH_LIMIT = 50_000_000

SUPERSET_WEBSERVER_TIMEOUT = 900
SQLLAB_ASYNC_TIME_LIMIT_SEC = 900
SQLLAB_QUERY_COST_ESTIMATE_LIMIT = 1_000_000

# ---------------------------------------------------------------------------
# 2. FEATURE FLAGS
# ---------------------------------------------------------------------------
FEATURE_FLAGS = {
    "DASHBOARD_NATIVE_FILTERS": True,
    "ASYNC_QUERIES": True,
    "ALERT_REPORTS": True,
}

# ---------------------------------------------------------------------------
# 3. SECURITY & METADATA DB
# ---------------------------------------------------------------------------
SECRET_KEY = 'qownE2UVpjNmVkq6+ITlTPnd1RL+RUP+/k0KT71xEKjKGvv3tlAQvXoy'

SQLALCHEMY_DATABASE_URI = (
    'postgresql+psycopg2://Onur.Simsek:NVJzH6JSp371Nea@10.34.211.50:5432/superset'
)

# ---------------------------------------------------------------------------
# 4. CSRF
# ---------------------------------------------------------------------------
WTF_CSRF_ENABLED = True
WTF_CSRF_EXEMPT_LIST = []
WTF_CSRF_TIME_LIMIT = 60 * 60 * 24 * 365  # 1 year

# ---------------------------------------------------------------------------
# 5. UI & PLUG‑INS
# ---------------------------------------------------------------------------
MAPBOX_API_KEY = ''
APP_ICON = "/static/assets/images/logo.png"

HORIZONTAL_FILTER_BAR = True
ALLOW_FULL_CSV_EXPORT = True
DYNAMIC_PLUGINS = True
ENABLE_TEMPLATE_PROCESSING = True
ALERT_REPORTS_NOTIFICATION_DRY_RUN = False

# ---------------------------------------------------------------------------
# 6. REDIS
# ---------------------------------------------------------------------------
REDIS_HOST = "10.34.200.200"
REDIS_PORT = 6379

def _redis_url(db: int) -> str:
    return f"redis://{REDIS_HOST}:{REDIS_PORT}/{db}"

# ---------------------------------------------------------------------------
# 7. CELERY
# ---------------------------------------------------------------------------
class CeleryConfig:
    broker_url = _redis_url(0)
    result_backend = _redis_url(7)
    imports = (
        "superset.sql_lab",
        "superset.tasks.scheduler",
    )
    worker_prefetch_multiplier = 1  # adil task dağılımı
    task_acks_late = True
    task_annotations = {
        "sql_lab.get_sql_results": {"rate_limit": "100/s"},
    }
    beat_schedule = {
        "reports.scheduler": {
            "task": "reports.scheduler",
            "schedule": crontab(minute="*", hour="*"),
        },
        "reports.prune_log": {
            "task": "reports.prune_log",
            "schedule": crontab(minute=0, hour=0),
        },
    }

CELERY_CONFIG = CeleryConfig

# ---------------------------------------------------------------------------
# 8. CACHE & SESSION
# ---------------------------------------------------------------------------
RESULTS_BACKEND = RedisCache(
    host=REDIS_HOST,
    port=REDIS_PORT,
    db=6,                       # <— ayrı DB
    key_prefix="superset_results_",
)

CACHE_CONFIG = {
    "CACHE_TYPE": "RedisCache",
    "CACHE_DEFAULT_TIMEOUT": 300,
    "CACHE_KEY_PREFIX": "superset_cache_",
    "CACHE_REDIS_HOST": REDIS_HOST,
    "CACHE_REDIS_PORT": REDIS_PORT,
    "CACHE_REDIS_DB": 1,
}

DATA_CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': int(timedelta(days=1).total_seconds()),
    'CACHE_KEY_PREFIX': 'superset_data_',
    'CACHE_REDIS_URL': _redis_url(3),
}

FILTER_STATE_CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': int(timedelta(days=1).total_seconds()),
    'CACHE_KEY_PREFIX': 'superset_filter_',
    'CACHE_REDIS_URL': _redis_url(4),
}

EXPLORE_FORM_DATA_CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': int(timedelta(days=1).total_seconds()),
    'CACHE_KEY_PREFIX': 'superset_explore_',
    'CACHE_REDIS_URL': _redis_url(5),
}

SESSION_TYPE = "redis"
SESSION_REDIS = redis.from_url(_redis_url(2))
SESSION_PERMANENT = True
SESSION_USE_SIGNER = True
SESSION_KEY_PREFIX = "superset_session_"



ENABLE_PROXY_FIX = True

# ---------------------------------------------------------------------------
# 9. CORS
# ---------------------------------------------------------------------------
ENABLE_CORS = True
CORS_OPTIONS = {
    'supports_credentials': True,
    'allow_headers': ['*'],
    'resources': ['*'],
    'origins': [
        'http://10.34.200.200:8005',
        'http://10.34.200.200:8006',
        'http://10.34.200.201:8005',
        'http://10.34.200.202:8005',
        'http://10.34.200.203:8005',
        '10.34.200.200:6379',
    ],
}

# ---------------------------------------------------------------------------
# 10. EMAIL & ALERTS
# ---------------------------------------------------------------------------
SMTP_HOST = "10.34.125.31"
SMTP_PORT = 587
SMTP_STARTTLS = True
SMTP_SSL = False
SMTP_USER = "yemvars@smtp.dedas.com.tr"
SMTP_PASSWORD = "11=N1pM=@xo8AkH]"
SMTP_MAIL_FROM = "yemvars@smtp.dedas.com.tr"

SLACK_API_TOKEN = "xoxb-"

# ---------------------------------------------------------------------------
# 11. WEBDRIVER / SCREENSHOTS
# ---------------------------------------------------------------------------
WEBDRIVER_TYPE = "chrome"
WEBDRIVER_OPTION_ARGS = [
    "--force-device-scale-factor=2.0",
    "--high-dpi-support=2.0",
    "--headless",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-extensions",
]

WEBDRIVER_BASEURL = "http://10.34.200.200/"
WEBDRIVER_BASEURL_USER_FRIENDLY = WEBDRIVER_BASEURL

SCREENSHOT_LOCATE_WAIT = 100
SCREENSHOT_LOAD_WAIT = 600

# ---------------------------------------------------------------------------
# 12. LOGGING
# ---------------------------------------------------------------------------
SUPERSET_LOG_LEVEL = "DEBUG"

# ---------------------------------------------------------------------------
# 13. CSV EXPORT
# ---------------------------------------------------------------------------
CSV_EXPORT = {
    "encoding": "utf-8",
    "sep": ";",
    "decimal": ",",
}
D3_FORMAT = {
     "decimal": ",",           # - decimal place string (e.g., ".").
     "thousands": ".",         # - group separator string (e.g., ",").
     "grouping": [3],          # - array of group sizes (e.g., [3]), cycled as needed.
     "currency": ["", ""]     # - currency prefix/suffix strings (e.g., ["$", ""])
 }

D3_TIME_FORMAT = {
    # 20.05.2025 14:23:45  →  “20.05.2025 14:23:45”
    "dateTime": "%d.%m.%Y %H:%M:%S",

    # 20.05.2025
    "date": "%d.%m.%Y",

    # 14:23:45  (24 saatlik)
    "time": "%H:%M:%S",
    # 12 saatlik format kullanırsanız:
    # "time": "%-I:%M:%S %p",

    # 12 saatlik gösterimde “ÖÖ / ÖS” kullanmak isterseniz:
    "periods": ["ÖÖ", "ÖS"],  # (AM / PM)

    # Gün adları
    "days": [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ],
    "shortDays": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],

    # Ay adları
    "months": [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ],
    "shortMonths": [
        "Oca",
        "Şub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "Ağu",
        "Eyl",
        "Eki",
        "Kas",
        "Ara",
    ],
}
