package auth

func (*auth) Login(email string, password string) (accessToken string, refreshToken string, err error) {
	return accessToken, refreshToken, err
}
