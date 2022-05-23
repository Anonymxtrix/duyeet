package auth

type authService interface {
	Login(email string, password string) (accessToken string, refreshToken string, err error)
	SignUp(email string, password string) error
}

type Auth struct {
	authService authService
}

func New(authService authService) *Auth {
	return &Auth{authService}
}
