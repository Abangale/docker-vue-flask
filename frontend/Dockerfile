# Use official Node.js image
FROM node:18

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

# Start Vue app
CMD ["npm", "run", "dev"]
