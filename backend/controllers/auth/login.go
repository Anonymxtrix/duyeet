package auth

import "net/http"

func (controller *Auth) Login(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
