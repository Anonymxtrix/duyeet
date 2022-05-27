package auth

import (
	"duyeet/backend/controllers/utils"
	"log"
	"net/http"
)

type signUpRequest struct {
	Email    string `json:"email" validate:"required,max=255,email"`
	Password string `json:"password" validate:"required,min=8,max=255,password"`
}

func (controller *auth) SignUp(w http.ResponseWriter, r *http.Request) {
	isApplicationJson, err := utils.HasContentType(r, utils.ContentTypeApplicationJson)
	if err != nil {
		log.Printf(err.Error())
		utils.HandleHttpError(w, http.StatusBadRequest)
		return
	}
	if !isApplicationJson {
		utils.HandleHttpError(w, http.StatusUnsupportedMediaType)
		return
	}
	var request signUpRequest
	httpBodyReadCloser := http.MaxBytesReader(w, r.Body, int64(utils.MB))
	err = utils.DecodeJson(httpBodyReadCloser, &request)
	if err != nil {
		utils.HandleDecodeJsonError(w, err)
		return
	}
	err = controller.validator.CheckStruct(request)
	if err != nil {
		log.Printf(err.Error())
		utils.HandleHttpError(w, http.StatusBadRequest)
		return
	}
	err = controller.authService.SignUp(request.Email, request.Password)
	if err != nil {
		log.Printf(err.Error())
		utils.HandleHttpError(w, http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
	return
}
