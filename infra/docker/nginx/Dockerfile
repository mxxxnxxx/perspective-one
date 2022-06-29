FROM node:16-alpine as node
FROM nginx:1.22
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]
WORKDIR /data

ENV TZ=UTC


# --- ⑥ COPY 命令 ---
# node command
COPY --from=node /usr/local/bin /usr/local/bin
# npm command
COPY --from=node /usr/local/lib /usr/local/lib

COPY ./infra/docker/nginx/*.conf /etc/nginx/conf.d/
