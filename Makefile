COMPOSE = docker-compose

.PHONY: vendor

up: start
down: stop
start:
	npm start
stop:
	$(COMPOSE) down -v --remove-orphans || true
logs:
	$(COMPOSE) logs ooneex-design
ps:
	$(COMPOSE) ps
sh:
	$(COMPOSE) run ooneex-design sh
