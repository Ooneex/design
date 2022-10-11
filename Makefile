COMPOSE = docker-compose

.PHONY: vendor

up: start
down: stop
start:
	npm run storybook
stop:
	$(COMPOSE) down -v --remove-orphans || true
logs:
	$(COMPOSE) logs ooneex-design
ps:
	$(COMPOSE) ps
sh:
	$(COMPOSE) run ooneex-design sh

lint.run:
	deno task lint:run
lint.watch:
	deno task lint:watch
fmt.run:
	deno task fmt:run
