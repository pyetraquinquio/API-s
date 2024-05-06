let geeks = []; // Armazena os nomes em um array simulando uma base de dados
// Retorna todos os nomes armazenados
const findAll = () => {
return geeks;
};
// Retorna um nome específico pelo índice
const findById = (index) => {
return geeks[index];
};
// Adiciona um novo nome ao array
const create = (name) => {
geeks.push(name);
return geeks;
};
// Atualiza um nome no índice especificado
const update = (index, name) => {
geeks[index] = name;
return geeks;
};
// Remove um nome pelo índice
const deleteGeek = (index) => {
geeks.splice(index, 1);
};


module.exports = {
findAll,
findById,
create,
update,
deleteGeek
}