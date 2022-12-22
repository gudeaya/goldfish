build:
	docker compose build

run:
	docker compose up

down:
	docker compose down

lint:
	docker compose run --rm app npm run lint
lint.fix:
	docker compose exec app npm run lint:fix

package.install:
	docker compose run --rm app npm install

version.confirm.npm:
	docker compose run --rm app npm -v
version.confirm.node:
	docker compose run --rm app node -v