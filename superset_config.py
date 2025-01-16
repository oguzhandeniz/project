ENABLE_PROXY_FIX = True
ENABLE_WEBSOCKET = True

SECRET_KEY = "45rRYX654erTu$R987654erg"

SQLALCHEMY_ENGINE_OPTIONS = {
    "pool_size": 20,          # Default is 5; Increase as per your needs
    "max_overflow": 10,       # Default is 10; Handles temporary spikes
   # "pool_timeout": 30,       # Timeout for getting a connection (seconds)
    "pool_recycle": 3600,     # Recycle connections every hour
}

import psycopg2

SQLALCHEMY_DATABASE_URI= "postgresql+psycopg2://superset:superset@db:5432/superset"

ALERT_REPORTS_NOTIFICATION_DRY_RUN = False

REDIS_CONFIG = {
    "port": 6379,
    "host": "redis",
    "password": "",
    "db": "0,1,2",
    "ssl": False,
}

FILTER_STATE_CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': 86400,
    'CACHE_KEY_PREFIX': 'superset_filter_cache',
    'CACHE_REDIS_URL': 'redis://redis:6379/0'
}
DATA_CACHE_CONFIG = {
    "CACHE_TYPE": "SupersetMetastoreCache",
    "CACHE_KEY_PREFIX": "superset_results",  # make sure this string is unique to avoid collisions
    "CACHE_DEFAULT_TIMEOUT": 86400,  # 60 seconds * 60 minutes * 24 hours
}

DATA_CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': 86400,
    'CACHE_KEY_PREFIX': 'superset_data_cache',
    'CACHE_REDIS_URL': f'redis://{REDIS_CONFIG["host"]}:{REDIS_CONFIG["port"]}/13'
}

FEATURE_FLAGS = {
    "ALERTS_ATTACH_REPORTS": True,
    "ALERT_REPORTS": True,
    "DASHBOARD_RBAC": True,
    "EMBEDDABLE_CHARTS": True,
    "EMBEDDED_SUPERSET": True,
    "ENABLE_TEMPLATE_PROCESSING": True,
    "LISTVIEWS_DEFAULT_CARD_VIEW": True,
    "SCHEDULED_QUERIES": True,
    "SQL_VALIDATORS_BY_ENGINE": True,
    "THUMBNAILS": True,
    "GUEST_TOKEN": True,
    "DASHBOARD_NATIVE_FILTERS": True,
    "DASHBOARD_FILTERS_EXPERIMENTAL":True
}
from celery.schedules import crontab
from superset.tasks.types import ExecutorType
from superset.extensions import celery_app
from pymongo import MongoClient
import pandas as pd
from sqlalchemy import create_engine

REDIS_HOST = "superset_cache"
REDIS_PORT = "6379"

class CeleryConfig:
    broker_url = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
    imports = (
            "superset.sql_lab",
            "superset.tasks",
            "superset.tasks.thumbnails",
            "superset.tasks.scheduler",
            )
    result_backend = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
    worker_prefetch_multiplier = 1
    task_acks_late = False
    task_annotations = {
            "sql_lab.get_sql_results": {
                "rate_limit": "100/s",
                },
            "email_reports.send": {
                "rate_limit":"1/s",
                "time_limit":600,
                "soft_time_limit":600,
                "ignore results": True,
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


    # Define your Celery task
    #@celery_app.task()

# Schedule Reports user tab
SCHEDULED_QUERIES = {
    # This information is collected when the user clicks "Schedule query",
    # and saved into the `extra` field of saved queries.
    # See: https://github.com/mozilla-services/react-jsonschema-form
    'JSONSCHEMA': {
        'title': 'Schedule',
        'description': (
            'In order to schedule a query, you need to specify when it '
            'should start running, when it should stop running, and how '
            'often it should run. You can also optionally specify '
            'dependencies that should be met before the query is '
            'executed. Please read the documentation for best practices '
            'and more information on how to specify dependencies.'
            ),
        'type': 'object',
        'properties': {
            'output_table': {
                'type': 'string',
                'title': 'Output table name',
                },
            'start_date': {
                'type': 'string',
                'title': 'Start date',
                # date-time is parsed using the chrono library, see
                # https://www.npmjs.com/package/chrono-node#usage
                'format': 'date-time',
                'default': 'tomorrow at 9am',
                },
            'end_date': {
                'type': 'string',
                'title': 'End date',
                # date-time is parsed using the chrono library, see
                # https://www.npmjs.com/package/chrono-node#usage
                'format': 'date-time',
                'default': '9am in 30 days',
                },
            'schedule_interval': {
                'type': 'string',
                'title': 'Schedule interval',
                },
            'dependencies': {
                'type': 'array',
                'title': 'Dependencies',
                'items': {
                    'type': 'string',
                    },
                },
            },
        },
    'UISCHEMA': {
        'schedule_interval': {
            'ui:placeholder': '@daily, @weekly, etc.',
            },
        'dependencies': {
            'ui:help': (
                'Check the documentation for the correct format when '
                'defining dependencies.'
                ),
            },
        },
    'VALIDATION': [
            # ensure that start_date <= end_date
            {
                'name': 'less_equal',
                'arguments': ['start_date', 'end_date'],
                'message': 'End date cannot be before start date',
                # this is where the error message is shown
                'container': 'end_date',
                },
            ],
    # link to the scheduler; this example links to an Airflow pipeline
    # that uses the query id and the output table as its name
    'linkback': (
            'https://airflow.example.com/admin/airflow/tree?'
            'dag_id=query_${id}_${extra_json.schedule_info.output_table}'
            ),
}

SCREENSHOT_LOCATE_WAIT = 100
SCREENSHOT_LOAD_WAIT = 1200

CELERY_CONFIG = CeleryConfig

THUMBNAIL_SELENIUM_USER = "admin"
from superset.tasks.types import ExecutorType

SCREENSHOT_LOCATE_WAIT = 1200  # Increase the wait time for locating elements
SCREENSHOT_LOAD_WAIT = 1200

SMTP_HOST = 'DD-SMTP01.dedas.local'
MTP_STARTTLS = True
SMTP_SSL = False
SMTP_USER = 'yemvars@smtp.dedas.com.tr'
SMTP_PORT = 587
SMTP_PASSWORD = '11=N1pM=@xo8AkH]'
SMTP_MAIL_FROM = 'yemvars@smtp.dedas.com.tr'

WEBDRIVER_BASEURL = "http://superset:8088/"
