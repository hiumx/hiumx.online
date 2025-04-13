# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Run stage

FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# ENV NGINXUSER=hiumxonline
# ENV NGINXGROUP=hiumxonline

# RUN adduser -D ${NGINXUSER}

# RUN usermod -aG nginx ${NGINXUSER}

COPY --from=build /app/build /usr/share/nginx/html

# RUN chown -R ${NGINXUSER}:${NGINXGROUP} /usr/share/nginx/html

# USER ${NGINXUSER}

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]