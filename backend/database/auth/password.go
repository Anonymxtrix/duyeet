package auth

func (auth *auth) Create(email string, hashedPassword string) error {
	statement, err := auth.database.Preparex("INSERT INTO password_authentications (email, hashed_password) VALUES (?, ?)")
	if err != nil {
		return err
	}
	_, err = statement.Exec(email, hashedPassword)
	if err != nil {
		return err
	}
	return nil
}
