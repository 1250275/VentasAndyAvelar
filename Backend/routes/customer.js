const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

// Rutas de la tabla clientes
router.get('/', customerController.list);          // listar todos
router.post('/', customerController.save);         // insertar
router.delete('/:id', customerController.delete);  // eliminar por id
router.get('/:id', customerController.edit);       // obtener por id
router.post('/:id', customerController.update);    // actualizar por id

module.exports = router;
