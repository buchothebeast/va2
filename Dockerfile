# 1. Use official Node.js image
FROM node:18

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy dependency files and install
COPY package*.json ./
RUN npm install

# 4. Copy all project files into container
COPY . .

# 5. Build the app for production
RUN npm run build

# 6. Install static file server
RUN npm install -g serve

# 7. Serve the build folder
CMD ["serve", "-s", "dist"]

# 8. Expose the container’s port
EXPOSE 3000
