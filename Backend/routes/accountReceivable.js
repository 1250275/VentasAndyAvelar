const express = require('express');
const router = express.Router();

const accountReceivableController = require('../controllers/accountReceivableController');

// Rutas de la tabla cxcobrar
router.get('/', accountReceivableController.list);          // listar todos
router.post('/', accountReceivableController.save);         // insertar
router.delete('/:id', accountReceivableController.delete);  // eliminar por id
router.get('/:id', accountReceivableController.edit);       // obtener por id
router.post('/:id', accountReceivableController.update);    // actualizar por id

module.exports = router;
