package auth

type authDatabase interface {
	Create(email string, password string) error
}

type Auth struct {
	authDatabase authDatabase
}

func New(database authDatabase) *Auth {
	return &Auth{database}
}
