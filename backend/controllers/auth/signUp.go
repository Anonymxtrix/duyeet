package auth

import (
	"net/http"
)

func SignUp(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
