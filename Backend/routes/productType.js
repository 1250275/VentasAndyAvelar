const express = require('express');
const router = express.Router();

const productTypeController = require('../controllers/productTypeController');

// Rutas de la tabla tipoproducto
router.get('/', productTypeController.list);          // listar todos
router.post('/', productTypeController.save);         // insertar
router.delete('/:id', productTypeController.delete);  // eliminar por id
router.get('/:id', productTypeController.edit);       // obtener por id
router.post('/:id', productTypeController.update);    // actualizar por id

module.exports = router;
