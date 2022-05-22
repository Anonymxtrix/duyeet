package main

import "net/http"

func signUp(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
