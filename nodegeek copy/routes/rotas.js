const express = require('express');
const router = express.Router(); // Cria um objeto de roteamento
const geeksController = require('../controllers/controller'); 

router.get('/geeks', geeksController.listGeeks);
router.get('/geeks/:index', geeksController.getGeek);
router.post('/inclueg', geeksController.addGeek);
router.put('/alterag/:index', geeksController.updateGeek);
router.delete('/deletag/:index', geeksController.deleteGeek);


module.exports = router; 