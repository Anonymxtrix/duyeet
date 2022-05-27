package auth

type authService interface {
	Login(email string, password string) (accessToken string, refreshToken string, err error)
	SignUp(email string, password string) error
}

type validator interface {
	CheckStruct(s interface{}) error
}

type auth struct {
	authService authService
	validator   validator
}

func New(authService authService, validator validator) *auth {
	return &auth{authService, validator}
}
