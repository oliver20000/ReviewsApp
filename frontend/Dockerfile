# Use a imagem base do Node para o frontend
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existente) para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do frontend para o contêiner
COPY . .

# Defina a porta que o contêiner irá expor
EXPOSE 8080

# Comando para iniciar o frontend
CMD ["npm", "run", "serve"]