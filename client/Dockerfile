FROM node:16-alpine as build
WORKDIR "/app"
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx.html
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'