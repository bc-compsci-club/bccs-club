# Use official Node.js LTS version as the base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container current working directory (/app)
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install

# Copy all files to the container working directory
COPY . .

# Expose the port (to the host) that Next.js will run on
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
