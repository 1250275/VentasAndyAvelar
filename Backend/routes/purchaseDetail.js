const express = require('express');
const router = express.Router();

const purchaseDetailController = require('../controllers/purchaseDetailController');

// Rutas de la tabla detalle_compra
router.get('/', purchaseDetailController.list);          // listar todos
router.post('/', purchaseDetailController.save);         // insertar
router.delete('/:id', purchaseDetailController.delete);  // eliminar por id
router.get('/:id', purchaseDetailController.edit);       // obtener por id
router.post('/:id', purchaseDetailController.update);    // actualizar por id

module.exports = router;
