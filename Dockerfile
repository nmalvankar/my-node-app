# Start from an official Node.js image
FROM node:14

ENV FLAG_SEED=T3KpS4B2J5X2jI3
# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
#RUN npm install

# Copy the application code
COPY . .

# Expose the application port
#EXPOSE 3000

# Command to run the application
#CMD ["npm", "start"]
