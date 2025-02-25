# Use official Node.js image
FROM node:lts-alpine3.20

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose the port Vue runs on
EXPOSE 8080

# Start Vue app
CMD ["npm", "run", "dev"]
