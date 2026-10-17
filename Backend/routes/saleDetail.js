const express = require('express');
const router = express.Router();

const saleDetailController = require('../controllers/saleDetailController');

// Rutas de la tabla detalleventa
router.get('/', saleDetailController.list);          // listar todos
router.post('/', saleDetailController.save);         // insertar
router.delete('/:id', saleDetailController.delete);  // eliminar por id
router.get('/:id', saleDetailController.edit);       // obtener por id
router.post('/:id', saleDetailController.update);    // actualizar por id

module.exports = router;
