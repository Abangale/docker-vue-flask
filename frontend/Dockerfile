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
EXPOSE 5173

# Start Vue app and make it accessible from outside Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
