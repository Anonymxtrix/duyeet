CREATE EXTENSION "uuid-ossp";

CREATE TABLE password_authentications (
    id UUID DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    PRIMARY KEY (id)
);
