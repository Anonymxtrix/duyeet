package auth

import "golang.org/x/crypto/bcrypt"

func (service *Auth) SignUp(email string, password string) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	err = service.authDatabase.Create(email, string(hashedPassword))
	if err != nil {
		return err
	}
	return nil
}
