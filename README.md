# Duyeet

## Getting Started

### Prerequisites

1. Ensure that you have [docker](https://www.docker.com/) installed in your
   development environment.
2. Ensure that you have [golang-migrate]((https://github.com/golang-migrate/
   migrate/tree/master/cmd/migrate#installation)) installed in your development environment.

### Instructions

1. Ensure that you are in the root directory (ie. `../duyeet`).
2. To start the local development environment, run `docker compose up`.
3. You should be able to view the frontend in the browser at `localhost:8000`.
4. You should be able to interact with the backend at `localhost:8001`.
5. You should be able to interact with the PostgreSQL database at
   `localhost:5432` using tools such as pgAdmin. Alternatively, you can access
   the database by spawning a shell in the database docker container. Use
   `docker exec -it duyeet-database sh` to spawn the shell and thereafter,
   `su postgres` to change user to postgres. Once done, run `psql` to access the
   database.

### Database Schema Migrations

- Ensure that you are in the root directory (ie. `../duyeet`).
- To create a new set of timestamped up/down migrations titled `NAME`,
  ```
  migrate create -ext .sql -dir ./backend/schema NAME
  ```
- To apply all up migrations,
  ```
  migrate -source ./backend/schema -database postgres://localhost:5432/duyeet up
  ```
