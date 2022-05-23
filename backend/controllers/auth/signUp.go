package auth

import (
	"net/http"
)

func (controller *Auth) SignUp(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
