package main

import "net/http"

func login(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}
