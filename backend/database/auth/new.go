package auth

import (
	"github.com/jmoiron/sqlx"
)

type auth struct {
	database *sqlx.DB
}

func New(database *sqlx.DB) *auth {
	return &auth{database}
}
