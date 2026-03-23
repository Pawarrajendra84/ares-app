# Use Node.js
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all frontend files (from ./frontend context)
COPY . .

# Install dependencies
RUN npm install

# Expose React/Vite/Next port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]