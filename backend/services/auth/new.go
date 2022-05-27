package auth

type authDatabase interface {
	Create(email string, password string) error
}

type authValidator interface {
	Email(field interface{}) error
	Password(field interface{}) error
}

type Auth struct {
	database  authDatabase
	validator authValidator
}

func New(database authDatabase, validator authValidator) *Auth {
	return &Auth{database, validator}
}

func (service *Auth) validateAuth(email string, password string) error {
	err := service.validator.Email(email)
	if err != nil {
		return err
	}
	err = service.validator.Password(password)
	if err != nil {
		return err
	}
	return nil
}
