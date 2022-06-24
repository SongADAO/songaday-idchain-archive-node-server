# Bring Server UP
	docker compose up -d

# Bring Server DOWN
	docker compose down

# Generate DH params
	openssl dhparam 4096 -out ./nginx/dhparam/dhparam.pem

# Generate Initial SSL Certificates
	docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d idchain.songadao.org

# Renew SSL Certificates
	docker-compose run --rm certbot renew

# Attach to Node Remotely via Geth (RPC)
	geth attach https://idchain.songadao.org/rpc

# Attach to Node Remotely via Geth (WebSockets)
	geth attach wss://idchain.songadao.org/ws

---

# Subgraph

https://idchain.songadao.org/subgraphs/name/generated/songaday/graphql
