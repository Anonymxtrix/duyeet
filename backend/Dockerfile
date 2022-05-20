# syntax=docker/dockerfile:1
FROM golang:1.18.2

# Create a working directory at /usr/src/app
WORKDIR /usr/src/app

# Install air binary into $(go env GOPATH)/bin/air
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading
# them in subsequent builds if they change
COPY go.mod go.sum ./
# Download and verify project dependencies
RUN go mod download && go mod verify

# Add our source code into the working directory in the image
COPY . .
# Compile the packages of our source code
# RUN go build -v -o /usr/local/bin/app ./...

# Start the server
CMD ["air"]

# Expose the port from the container for development
EXPOSE 8001
