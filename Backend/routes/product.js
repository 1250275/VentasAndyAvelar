const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Rutas de la tabla producto
router.get('/', productController.list);          // listar todos
router.post('/', productController.save);         // insertar
router.delete('/:id', productController.delete);  // eliminar por id
router.get('/:id', productController.edit);       // obtener por id
router.post('/:id', productController.update);    // actualizar por id

module.exports = router;
