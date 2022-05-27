package auth

import "net/http"

func (controller *auth) Login(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
