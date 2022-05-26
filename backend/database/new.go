package database

import (
	"fmt"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func New() (*sqlx.DB, error) {
	database := os.Getenv("DATABASE")
	databaseHost := os.Getenv("DATABASE_HOST")
	databasePort := os.Getenv("DATABASE_PORT")
	databaseUser := os.Getenv("DATABASE_USER")
	databaseUserPassword := os.Getenv("DATABASE_USER_PASSWORD")
	databaseName := os.Getenv("DATABASE_NAME")

	databaseDataSourceName := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		databaseHost, databasePort, databaseUser, databaseUserPassword, databaseName)

	return sqlx.Connect(database, databaseDataSourceName)
}
