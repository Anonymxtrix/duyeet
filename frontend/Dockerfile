# syntax=docker/dockerfile:1
FROM node:18.1.0
ENV NODE_ENV=production

# Create a working directory at /app
WORKDIR /app

# Copy the package.json and the yarn/lock file into our working directory
COPY ["package.json", "yarn.lock", "./"]

# Install project dependencies
RUN yarn install --production

# Add our source code into the working directory in the image
COPY . .

# Start the server
CMD ["yarn", "start"]

# Expose the port from the container for development
EXPOSE 8000
