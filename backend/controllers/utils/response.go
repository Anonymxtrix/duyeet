package utils

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
)

// HandleHttpError writes a message to the http response according to the http
// status code. It does nothing if the code is unknown.
func HandleHttpError(w http.ResponseWriter, code int) {
	errorMessage := http.StatusText(code)
	if errorMessage == "" {
		return
	}
	http.Error(w, errorMessage, code)
}

// HandleDecodeJsonError writes a message to the http response according to the
// type of the error. It does nothing if the error is unknown.
func HandleDecodeJsonError(w http.ResponseWriter, err error) {
	var decodeJsonError *decodeJsonError
	isDecodeJsonError := errors.As(err, &decodeJsonError)
	if !isDecodeJsonError {
		return
	}
	var syntaxError *json.SyntaxError
	var unmarshalTypeError *json.UnmarshalTypeError
	switch {
	case errors.As(err, &syntaxError):
		log.Printf(syntaxError.Error())
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	case errors.As(err, &unmarshalTypeError):
		log.Printf(unmarshalTypeError.Error())
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
	default:
		log.Print(err.Error())
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}
}
