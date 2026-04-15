# ui
From node:18 AS build
WORKDIR /ui
COPY ../ui .
RUN npm install && npm run build

#build backend
From node:18
WORKDIR /server
COPY --from=build /ui/dist ./public
RUN npm install
EXPOSE 7000
CMD [ "node", "server.js" ]