package validator

func (validation *validator) Email(field interface{}) error {
	return validation.validator.Var(field, "required,email,max=255")
}

func (validation *validator) Password(field interface{}) error {
	return validation.validator.Var(field, "required,password,min=8,max=255")
}
