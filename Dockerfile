# -------------------------------- STAGE 1: Build -----------------------------------
FROM node:18.15-alpine3.16 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build 

# -------------------------------- STAGE 2: Run --------------------------------------
FROM nginx:1.23-alpine

ENV TZ='Asia/Bangkok'
RUN apk update && apk add ca-certificates && update-ca-certificates && apk add --update tzdata
RUN rm -rf /var/cache/apk/*

COPY --from=build /app/dist/mygg /usr/share/nginx/mygg
CMD ["nginx", "-g", "daemon off;"]



