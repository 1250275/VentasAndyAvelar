const express = require('express');
const router = express.Router();

const accountPayableController = require('../controllers/accountPayableController');

// Rutas de la tabla cxpagar
router.get('/', accountPayableController.list);          // listar todos
router.post('/', accountPayableController.save);         // insertar
router.delete('/:id', accountPayableController.delete);  // eliminar por id
router.get('/:id', accountPayableController.edit);       // obtener por id
router.post('/:id', accountPayableController.update);    // actualizar por id

module.exports = router;
