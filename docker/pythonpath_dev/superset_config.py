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
ALERT_REPORTS: True
ENABLE_TEMPLATE_PROCESSING = True
ALERT_REPORTS_NOTIFICATION_DRY_RUN = False




from cachelib.redis import RedisCache

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