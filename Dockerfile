# Stage 1: Construir la aplicación
FROM node:20-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Stage 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar los archivos compilados desde el stage 'builder' al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
# Esto es importante para que las rutas de React funcionen al refrescar la página
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# El comando por defecto de Nginx se encargará de iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]
