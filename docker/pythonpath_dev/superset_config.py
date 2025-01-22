import logging
import os

from celery.schedules import crontab
from flask_caching.backends.filesystemcache import FileSystemCache

logger = logging.getLogger()

# Superset specific config
ROW_LIMIT = 50000000
DISPLAY_MAX_ROW = 50000000  # Adjust this value as needed
SQL_MAX_ROW = 50000000  # Adjust this value as needed
DEFAULT_SQLLAB_LIMIT = 1000  # Adjust this value as needed
SAMPLES_ROW_LIMITT = 50000000
NATIVE_FILTER_DEFAULT_ROW_LIMIT = 50000000
FILTER_SELECT_ROW_LIMIT = 50000000
QUERY_SEARCH_LIMIT = 50000000

# Flask App Builder configuration
# Your App secret key will be used for securely signing the session cookie
# and encrypting sensitive information on the database
# Make sure you are changing this key for your deployment with a strong key.
# Alternatively you can set it with `SUPERSET_SECRET_KEY` environment variable.
# You MUST set this for production environments or the server will refuse
# to start and you will see an error in the logs accordingly.
SECRET_KEY = 'qownE2UVpjNmVkq6+ITlTPnd1RL+RUP+/k0KT71xEKjKGvv3tlAQvXoy'

# The SQLAlchemy connection string to your database backend
# This connection defines the path to the database that stores your
# superset metadata (slices, connections, tables, dashboards, ...).
# Note that the connection information to connect to the datasources
# you want to explore are managed directly in the web UI
# The check_same_thread=false property ensures the sqlite client does not attempt
# to enforce single-threaded access, which may be problematic in some edge cases
SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://Onur.Simsek:NVJzH6JSp371Nea@10.34.211.50:5432/superset'


# Flask-WTF flag for CSRF
WTF_CSRF_ENABLED = True
# Add endpoints that need to be exempt from CSRF protection
WTF_CSRF_EXEMPT_LIST = []
# A CSRF token that expires in 1 year
WTF_CSRF_TIME_LIMIT = 60 * 60 * 24 * 365

# Set this API key to enable Mapbox visualizations
MAPBOX_API_KEY = ''


APP_ICON = "/static/assets/images/logo.png"

HORIZONTAL_FILTER_BAR: True
ALLOW_FULL_CSV_EXPORT: True
DYNAMIC_PLUGINS: True
ENABLE_TEMPLATE_PROCESSING = True
ALERT_REPORTS_NOTIFICATION_DRY_RUN = False


FEATURE_FLAGS = {
    "ALERT_REPORTS": True
}

REDIS_HOST = "superset_cache"
REDIS_PORT = "6379"

class CeleryConfig:
    broker_url = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
    imports = (
        "superset.sql_lab",
        "superset.tasks.scheduler",
    )
    result_backend = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
    worker_prefetch_multiplier = 10
    task_acks_late = True
    task_annotations = {
        "sql_lab.get_sql_results": {
            "rate_limit": "100/s",
        },
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

SCREENSHOT_LOCATE_WAIT = 100
SCREENSHOT_LOAD_WAIT = 600

SLACK_API_TOKEN = "xoxb-"


# Email configuration
SMTP_HOST = "10.34.125.31"
SMTP_PORT = 587
SMTP_STARTTLS = True
SMTP_SSL_SERVER_AUTH = True # If your using an SMTP server with a valid certificate
SMTP_SSL = False
SMTP_USER = "yemvars@smtp.dedas.com.tr"
SMTP_PASSWORD = "11=N1pM=@xo8AkH]"
SMTP_MAIL_FROM = "yemvars@smtp.dedas.com.tr"


# WebDriver configuration
# If you use Firefox, you can stick with default values
# If you use Chrome, then add the following WEBDRIVER_TYPE and WEBDRIVER_OPTION_ARGS
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

WEBDRIVER_BASEURL = "http://0.0.0.0:8080/"
WEBDRIVER_BASEURL_USER_FRIENDLY = "http://0.0.0.0:8080/"

from flask_caching.backends.rediscache import RedisCache

# Redis URL: redis://:password@host:port/db
# Örneğin localhost'ta 6379, parola yok, DB 0
RESULTS_BACKEND = RedisCache(
    host='localhost',
    port=6379,
    key_prefix='superset_results'
)

CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': 300,
    'CACHE_KEY_PREFIX': 'superset_cache_',
    'HOST': 'localhost',
    'PORT': 6379,
    'DB': 1,  # hangi DB'yi kullanacağınız
    'PASSWORD': '',  # eğer parola yoksa boş
}


ENABLE_CORS = True
CORS_OPTIONS = {
    'supports_credentials': True,
    'allow_headers': ['*'],
    'resources': ['*'],
    'origins': ['http://10.34.211.143:8000', 'http://10.34.211.143:8001', 'http://10.34.211.143:8000/menu_items'],  # Add your allowed origins here
}