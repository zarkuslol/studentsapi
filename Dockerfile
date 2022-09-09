FROM node:16
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 8080
CMD ["npm", "start"]
