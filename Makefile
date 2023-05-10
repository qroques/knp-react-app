.env:
	cp .env.dist .env

.PHONY:
install-deps:
	docker-compose run --rm app yarn install

.PHONY:
start:
	docker-compose up -d

.PHONY:
test:
	docker-compose run --rm app npm run test
