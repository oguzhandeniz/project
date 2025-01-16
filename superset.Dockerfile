FROM superset_base:latest

USER root
RUN apt-get update
RUN apt-get -y install postgresql
RUN pip install redis
RUN pip install psycopg2-binary
RUN apt-get update && \
    apt-get install -y iputils-ping netcat-openbsd redis-tools && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y wget

RUN pip install flask-socketio
RUN pip install flower
RUN pip install pymongo

RUN pip install clickhouse-connect

RUN apt-get update && \
    apt-get install -yqq --no-install-recommends \
    libmariadb3 libmariadb-dev \
    git gcc make cmake \
    vim \
    iputils-ping \
    curl \
    firefox-esr

ARG GECKODRIVER_VERSION=0.33.0

ENV ADMIN_USERNAME $ADMIN_USERNAME
ENV ADMIN_EMAIL $ADMIN_EMAIL
ENV ADMIN_PASSWORD $ADMIN_PASSWORD

# Install headless firefox
# Install headless firefox
RUN wget -q -O geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz && \
    tar -xzf geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz && \
    mv geckodriver /usr/bin/geckodriver && \
    chmod 755 /usr/bin/geckodriver && \
    rm geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz

COPY superset_config.py /app/
COPY ./superset-websocket/config.json /app/superset-websocket/config.json
COPY ./.env /app/
COPY ./docker /app/docker

ENV SUPERSET_CONFIG_PATH /app/superset_config.py

# Create logs file
RUN mkdir -p ${SUPERSET_HOME}/superset-logs && chmod -R 777 ${SUPERSET_HOME}/superset-logs
#RUN mkdir ${SUPERSET_HOME}/superset-logs
RUN touch ${SUPERSET_HOME}/superset-logs/superset.log

USER superset
ENTRYPOINT [ "/app/docker/docker-bootstrap.sh" ]

