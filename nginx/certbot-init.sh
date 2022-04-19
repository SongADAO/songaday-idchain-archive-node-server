#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d idchain.songadao.org
