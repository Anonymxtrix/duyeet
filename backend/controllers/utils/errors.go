package utils

type decodeJsonError struct {
	err error
}

func (err *decodeJsonError) Error() string {
	return err.err.Error()
}

func (err *decodeJsonError) Unwrap() error {
	return err.err
}
