
# Step 1 — Base image
FROM node:latest

# Install nodemon globally
RUN npm install -g nodemon

# Step 2 — Make app directory
WORKDIR /app

# Step 3 — Copy package files

COPY package*.json ./

# Step 4 — Install dependencies
RUN npm install

# Step 5 — Copy all source code
COPY . .

# Step 6 — Expose API port
EXPOSE 5000

# Step 7 — Start the server
CMD ["npm", "start"]
