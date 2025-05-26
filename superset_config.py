# -*- coding: utf-8 -*-
"""
256 vCPU / 4 TiB RAM sunucuda Superset’i yüksek eş-zamanlı yük altında
kararlı ve hızlı çalıştırmak için optimize edilmiş yapılandırma.
"""

# -------------------------------------------------------------------
# 1) GENEL
# -------------------------------------------------------------------
ENABLE_PROXY_FIX = True           # Ters proxy (HAProxy/Nginx) arkasında doğru IP görmek için
ENABLE_WEBSOCKET = True           # Dashboard filtrelerinde canlı güncelleme
SECRET_KEY = "45rRYX654erTu$R987654erg"   # Üretimde değiştirin!

# -------------------------------------------------------------------
# 2) SQLALCHEMY (Superset metadata PostgreSQL bağlantısı)
# -------------------------------------------------------------------
SQLALCHEMY_ENGINE_OPTIONS = {
    "pool_size": 100,          # Başlangıç bağlantı sayısı
    "max_overflow": 200,       # Havuz dolunca geçici ekstra bağlantı
    "pool_timeout": 30,        # Bağlantı bulunamazsa bekleme (sn)
    "pool_recycle": 3600,      # Eski bağlantıyı 1 saatte yenile
}

SQLALCHEMY_DATABASE_URI = "postgresql+psycopg2://superset:superset@db:5432/superset"

# -------------------------------------------------------------------
# 3) UZUN İŞ ZAMAN AŞIMLARI
# -------------------------------------------------------------------
SUPERSET_WEBSERVER_TIMEOUT = 3600          # HTTP isteği kesilmesin (sn)
SQLLAB_ASYNC_TIME_LIMIT_SEC = 3600         # Celery worker sorgu limiti (sn)
SQLLAB_QUERY_COST_ESTIMATE_LIMIT = 10_000_000  # Karmaşık sorgular engellenmesin

# -------------------------------------------------------------------
# 4) REDIS & CACHE KATLARI
#    DB0 : Celery broker / backend
#    DB1 : Dashboard filtre durumu
#    DB2 : Chart & dashboard veri cache
#    DB3 : Query sonuçları (results backend)
# -------------------------------------------------------------------
REDIS_HOST = "redis"
REDIS_PORT = 6379
REDIS_PASSWORD = ""
REDIS_SSL = False

def _redis_url(db: int) -> str:
    return f"redis://{REDIS_HOST}:{REDIS_PORT}/{db}"

# Dashboard filtrelerinin durumu
FILTER_STATE_CACHE_CONFIG = {
    "CACHE_TYPE": "RedisCache",
    "CACHE_REDIS_URL": _redis_url(1),
    "CACHE_KEY_PREFIX": "superset_filter_cache",
    "CACHE_DEFAULT_TIMEOUT": 3600,
}

# Chart / dashboard veri cache’i
DATA_CACHE_CONFIG = {
    "CACHE_TYPE": "RedisCache",
    "CACHE_REDIS_URL": _redis_url(2),
    "CACHE_KEY_PREFIX": "superset_data_cache",
    "CACHE_DEFAULT_TIMEOUT": 3600,
}

# Query sonuçlarının saklandığı arka uç
from flask_caching import RedisCache
RESULTS_BACKEND = RedisCache(
    host=REDIS_HOST,
    port=REDIS_PORT,
    db=3,
    key_prefix="superset_results",
)

CACHE_DEFAULT_TIMEOUT = 3600  # Tüm RedisCache'ler için varsayılan süre (sn)

# -------------------------------------------------------------------
# 5) FEATURE FLAGS
# -------------------------------------------------------------------
FEATURE_FLAGS = {
    "ALERT_REPORTS": True,
    "ALERTS_ATTACH_REPORTS": True,
    "DASHBOARD_RBAC": True,
    "DASHBOARD_NATIVE_FILTERS": True,
    "DASHBOARD_FILTERS_EXPERIMENTAL": True,
    "EMBEDDABLE_CHARTS": True,
    "EMBEDDED_SUPERSET": True,
    "ENABLE_TEMPLATE_PROCESSING": True,
    "LISTVIEWS_DEFAULT_CARD_VIEW": True,
    "SCHEDULED_QUERIES": True,
    "SQL_VALIDATORS_BY_ENGINE": True,
    "THUMBNAILS": True,
    "GUEST_TOKEN": True,
}

# -------------------------------------------------------------------
# 6) CELERY AYARLARI
# -------------------------------------------------------------------
from celery.schedules import crontab

class CeleryConfig:
    broker_url = _redis_url(0)       # DB0
    result_backend = _redis_url(0)   # DB0

    worker_prefetch_multiplier = 1   # Her işçiye adil görev dağıt
    task_acks_late = False

    imports = (
        "superset.sql_lab",
        "superset.tasks",
        "superset.tasks.thumbnails",
        "superset.tasks.scheduler",
    )

    task_annotations = {
        "sql_lab.get_sql_results": {"rate_limit": "100/s"},
        "email_reports.send": {
            "rate_limit": "1/s",
            "time_limit": 600,
            "soft_time_limit": 600,
            "ignore_results": True,
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

# -------------------------------------------------------------------
# 7) SCHEDULED_QUERIES (MEVCUT ŞEMANIZ) – DEĞİŞTİRİLMEDİ
# -------------------------------------------------------------------
# ...  (var olan JSONSCHEMA/UISCHEMA/VALIDATION blokları dosyanızdan aynen kalabilir) ...

# -------------------------------------------------------------------
# 8) THUMBNAIL & WEBDRIVER
# -------------------------------------------------------------------
SCREENSHOT_LOCATE_WAIT = 1200   # ms
SCREENSHOT_LOAD_WAIT = 1200     # ms
THUMBNAIL_SELENIUM_USER = "admin"
WEBDRIVER_BASEURL = "http://superset:8088/"

# -------------------------------------------------------------------
# 9) SMTP (E-posta raporları için) – gerekirse değiştirin
# -------------------------------------------------------------------
SMTP_HOST = "DD-SMTP01.dedas.local"
SMTP_STARTTLS = True
SMTP_SSL = False
SMTP_USER = "yemvars@smtp.dedas.com.tr"
SMTP_PORT = 587
SMTP_PASSWORD = "11=N1pM=@xo8AkH]"
SMTP_MAIL_FROM = "yemvars@smtp.dedas.com.tr"

# -------------------------------------------------------------------
# BİTTİ – dosyayı kaydedip Superset servisini yeniden başlatın:
#   systemctl restart hypercorn1
# -------------------------------------------------------------------
