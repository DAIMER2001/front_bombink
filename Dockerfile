# Establecer la imagen base
FROM node:14-alpine

# Crear el directorio de la aplicación
WORKDIR /app

# Copiar el archivo package.json y package-lock.json en el contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente en el contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "dev"]