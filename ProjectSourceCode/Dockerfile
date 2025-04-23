FROM node:20.10.0-alpine


# Install libc for glibc-native dependencies (like tailwind watchers)
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN ls -la /app

# The git ignore includes a package.json, make sure to comment out before deploying
COPY package.json ./
COPY package-lock.json ./


RUN npm install

COPY . .

# Build Tailwind CSS (ONE-TIME, not in watch mode)
RUN npx tailwindcss -i ./extra_resources/css/input.css -o ./extra_resources/css/style.css

# Optional: expose the port your server uses
EXPOSE 8080

# Run your server (adjust this if it's not index.js)
CMD ["node", "server/index.js"]