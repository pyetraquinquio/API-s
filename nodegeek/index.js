const express = require('express');// importa o express
const server = express();// cria uma variável chamada server que chama a funçãoexpress
server.use(express.json()); // faz com que o express entenda JSON
const geeks = []; // Array que vai armazenar os nomes em memória

// Rota GET para listar todos os elementos no array `geeks`
server.get('/geeks', (req, res) => {
return res.json(geeks);
}) // Crie uma rota /geeks com o metodo GET e retorna para o navegador um jsoncom Hello world

// req ➔ representa todos os dados da requisição.
// res ➔ todas as informações necessárias para informar uma resposta para ofront-end.

// Rota POST para adicionar um novo nome ao array
server.post('/inclueg', (req, res) => {
const { name } = req.body; // assim esperamos buscar o name informado dentrodo body da requisição
geeks.push(name); // Adiciona o novo nome ao array
return res.json(geeks); // retorna a informação da variável geeks, que é anossa ARRAY
})

// Rota GET para obter um nome específico no array baseado no índice
server.get('/geeks/:index', (req, res) => {
    const { index } = req.params; // Extrai o índice da URL
    return res.json(geeks[index]);
    })

// Rota PUT para atualizar um nome existente no array
server.put('/alterag/:index', (req, res) => {
    const { index } = req.params; // Extrai o índice da URL
    const { name } = req.body; // recupera o nome ligado ao indice
    geeks[index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    return res.json(geeks);
    }); // retorna novamente os geeks atualizados após o update

// Rota DELETE para remover um nome do array
server.delete('/deletag/:index', (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    geeks.splice(index, 1); // percorre o vetor até o index selecionado e deletauma posição no array
    return res.send();
    });

server.listen(3000);
const port = 3000;
console.log(`Aplicação rodando em http://localhost:${port}`);