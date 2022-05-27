package auth

type authDatabase interface {
	Create(email string, password string) error
}

type auth struct {
	database authDatabase
}

func New(database authDatabase) *auth {
	return &auth{database}
}
