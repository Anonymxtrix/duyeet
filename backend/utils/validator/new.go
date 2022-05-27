package validator

import (
	"reflect"
	"unicode"

	validatorPkg "github.com/go-playground/validator/v10"
)

type validator struct {
	validator *validatorPkg.Validate
}

func validatePassword(fl validatorPkg.FieldLevel) bool {
	value, kind, _ := fl.ExtractType(fl.Field())
	if kind != reflect.String {
		return false
	}
	hasLetter := false
	hasNumber := false
	for _, character := range value.String() {
		hasLetter = hasLetter || unicode.IsLetter(character)
		hasNumber = hasNumber || unicode.IsDigit(character)
		if hasLetter && hasNumber {
			return true
		}
	}
	return false
}

func New() *validator {
	validate := validatorPkg.New()
	validate.RegisterValidation("password", validatePassword)
	return &validator{validate}
}

func (validator *validator) CheckStruct(s interface{}) error {
	return validator.validator.Struct(s)
}
