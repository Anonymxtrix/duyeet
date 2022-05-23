package auth

import authService "duyeet/backend/services/auth"

type Auth struct {
	authService *authService.Auth
}

func New(authService *authService.Auth) *Auth {
	return &Auth{authService}
}
