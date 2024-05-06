const Geek = require('../models/model'); // Importa o modelo Geek
// Controlador para listar todos os nomes
const listGeeks = (req, res) => {
const geeks = Geek.findAll();
res.json(geeks);
};
// Controlador para obter um único nome pelo índice
const getGeek = (req, res) => {
const { index } = req.params;
const geek = Geek.findById(index);
res.json(geek);
};
// Controlador para adicionar um novo nome
const addGeek = (req, res) => {
const { name } = req.body;
const geeks = Geek.create(name);
res.json(geeks);
};
// Controlador para atualizar um nome existente
const updateGeek = (req, res) => {
const { index } = req.params;
const { name } = req.body;
const geeks = Geek.update(index, name);
res.json(geeks);
};
// Controlador para deletar um nome
const deleteGeek = (req, res) => {
const { index } = req.params;
Geek.deleteGeek(index);
res.status(204).send(); // Envia uma resposta sem conteúdo indicando sucesso
};


module.exports = {
listGeeks,
getGeek,
addGeek,
updateGeek,
deleteGeek
};