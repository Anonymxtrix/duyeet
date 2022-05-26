package main

import (
	authControllerPkg "duyeet/backend/controllers/auth"
	databasePkg "duyeet/backend/database"
	authServicePkg "duyeet/backend/services/auth"
	"fmt"
	"net/http"
	"os"
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

	_, err := databasePkg.New()
	if err != nil {
		// panic("Cannot connect to database.")
		os.Exit(1)
		return
	}

	authService := authServicePkg.New()
	authController := authControllerPkg.New(authService)

	r.Route("/auth", func(r chi.Router) {
		r.Post("/login", authController.Login)
		r.Post("/sign-up", authController.SignUp)
	})

	http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("PORT")), r)
}
