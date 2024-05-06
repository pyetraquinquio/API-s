const express = require('express'); // Importa o framework Express
const server = express(); // Cria uma instância do Express
const geeksRoutes = require('./routes/rotas'); // Importa as rotasdefinidas em geeksRoutes.js


server.use(express.json()); // Habilita o servidor para receber e enviarrespostas em formato JSON
server.use(geeksRoutes); // Usa as rotas importadas no servidor


const port = 3000; 
server.listen(port, () => { 
console.log(`Aplicação rodando em http://localhost:${port}`); 
});