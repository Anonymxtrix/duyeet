package main

import (
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Set a timeout value on the request context (ctx), that will signal through
	// ctx.Done() that the request has timed out and further processing should be
	// stopped.
	r.Use(middleware.Timeout(60 * time.Second))

	r.Use(middleware.Heartbeat("/heartbeat"))

	r.Route("/auth", func(r chi.Router) {
		r.Post("/login", login)
		r.Post("/sign-up", signUp)
	})

	http.ListenAndServe(":8001", r)
}
