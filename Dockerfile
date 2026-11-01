# ---- Build stage ----
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Run stage (Nginx) ----
FROM nginx:1.27-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/dist
RUN set -eux; \
  appDir="/usr/share/nginx/html/dist/portfolio"; \
  if [ -d "$appDir/browser" ]; then \
    ln -s "$appDir/browser" /usr/share/nginx/html/app; \
  else \
    ln -s "$appDir" /usr/share/nginx/html/app; \
  fi
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
