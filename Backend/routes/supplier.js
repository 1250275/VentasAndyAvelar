const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplierController');

// Rutas de la tabla proveedor
router.get('/', supplierController.list);          // listar todos
router.post('/', supplierController.save);         // insertar
router.delete('/:id', supplierController.delete);  // eliminar por id
router.get('/:id', supplierController.edit);       // obtener por id
router.post('/:id', supplierController.update);    // actualizar por id

module.exports = router;
