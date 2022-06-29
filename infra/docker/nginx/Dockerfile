FROM node:16-alpine as node
FROM nginx:1.22

WORKDIR /data

ENV TZ=UTC

RUN apk update && \
    apk add --update --no-cache --virtual=.build-dependencies g++

# --- ⑥ COPY 命令 ---
# node command
COPY --from=node /usr/local/bin /usr/local/bin
# npm command
COPY --from=node /usr/local/lib /usr/local/lib

COPY ./infra/docker/nginx/*.conf /etc/nginx/conf.d/
