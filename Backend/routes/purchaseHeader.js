const express = require('express');
const router = express.Router();

const purchaseHeaderController = require('../controllers/purchaseHeaderController');

// Rutas de la tabla encabezado_compra
router.get('/', purchaseHeaderController.list);          // listar todos
router.post('/', purchaseHeaderController.save);         // insertar
router.delete('/:id', purchaseHeaderController.delete);  // eliminar por id
router.get('/:id', purchaseHeaderController.edit);       // obtener por id
router.post('/:id', purchaseHeaderController.update);    // actualizar por id

module.exports = router;
