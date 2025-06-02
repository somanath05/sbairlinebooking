<<<<<<< HEAD
# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend source code to /app
COPY . .

# Expose port 5000 (matches your backend app port)
EXPOSE 5000

# Start backend server using npm start script
CMD ["npm", "start"]
=======
# # Use official Node.js image
# FROM node:18

# # Set working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json first (for better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all backend source code to /app
# COPY . .

# # Expose port 5000 (matches your backend app port)
# EXPOSE 5000

# # Start backend server using npm start script
# CMD ["npm", "start"]




# backend/Dockerfile

FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start backend app
CMD ["npm", "start"]
>>>>>>> edd7c9bae71a8fd2d4dcabf7650f0a122cc978d2
