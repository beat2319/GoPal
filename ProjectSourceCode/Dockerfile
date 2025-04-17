# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full app code
COPY . .

# Cloud Run expects the app to listen on port 8080
ENV PORT=8080
ENV NODE_ENV=production
EXPOSE 8080

# Start the app
CMD ["npm", "start"]