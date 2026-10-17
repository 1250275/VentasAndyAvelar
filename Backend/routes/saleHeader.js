const express = require('express');
const router = express.Router();

const saleHeaderController = require('../controllers/saleHeaderController');

// Rutas de la tabla encabezado_venta
router.get('/', saleHeaderController.list);          // listar todos
router.post('/', saleHeaderController.save);         // insertar
router.delete('/:id', saleHeaderController.delete);  // eliminar por id
router.get('/:id', saleHeaderController.edit);       // obtener por id
router.post('/:id', saleHeaderController.update);    // actualizar por id

module.exports = router;
