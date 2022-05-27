package validator

import (
	"reflect"
	"regexp"

	validatorPkg "github.com/go-playground/validator/v10"
)

var (
	passwordRegexp = regexp.MustCompile("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
)

type validator struct {
	validator *validatorPkg.Validate
}

func validatePassword(fl validatorPkg.FieldLevel) bool {
	value, kind, _ := fl.ExtractType(fl.Field())
	if kind != reflect.String {
		return false
	}
	return passwordRegexp.MatchString(value.String())
}

func New() *validator {
	validate := validatorPkg.New()
	validate.RegisterValidation("password", validatePassword)
	return &validator{validate}
}
