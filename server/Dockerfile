# ui
From node:22 AS build
WORKDIR /ui
COPY ui/ ./
RUN npm install && npm run build

#build backend
From node:22
WORKDIR /server
COPY server/ ./
COPY --from=build /ui/dist ./public

RUN npm install
EXPOSE 7000
CMD [ "node", "server.js" ]