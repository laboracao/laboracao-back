# Define the OS used on image
FROM node:18-alpine 
# Define the directory base of application
WORKDIR /app
# Define what files will be copy to base of application
COPY . .
# Define commands to run during the image generation
RUN npm install
# Run commands on Docker cmd
CMD ["npm", "run", "prod"]
# Define the ports to expose the application
EXPOSE 8081