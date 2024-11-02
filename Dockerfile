# Usar uma imagem Node.js leve
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código para o container
COPY . .

# Compilar o TypeScript
RUN npm run build

# Expor a porta que o backend usa
EXPOSE 3000

# Comando para iniciar o backend
CMD ["npm", "run", "start-dev"]