FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Bundle app source
EXPOSE 80
COPY . .
RUN npm install
ENTRYPOINT ["/bin/bash", "-c", "npm run production"]
