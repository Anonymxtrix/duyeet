package utils

import (
	"encoding/json"
	"io"
	"mime"
	"net/http"
)

const (
	ContentTypeApplicationJson        = "application/json"
	ContentTypeApplicationOctetStream = "application/octet-stream"
	HttpHeaderContentType             = "Content-Type"
)

// HasContentType gets the first value associated with the request's
// Content-Type header, parses it for the media type value and checks if it is
// equal to the mimetype specified.
func HasContentType(r *http.Request, mimetype string) (bool, error) {
	contentType := r.Header.Get(HttpHeaderContentType)
	if contentType == "" {
		return mimetype == ContentTypeApplicationOctetStream, nil
	}
	mediatype, _, err := mime.ParseMediaType(contentType)
	return mediatype == mimetype, err
}

// DecodeJson reads the JSON-encoded contents from the reader and stores it in
// the value pointed to by v.
func DecodeJson(r io.Reader, v interface{}) error {
	decoder := json.NewDecoder(r)
	decoder.DisallowUnknownFields()
	err := decoder.Decode(v)
	if err != nil {
		return &decodeJsonError{err}
	}
	return nil
}
