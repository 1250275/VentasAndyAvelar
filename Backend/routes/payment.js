const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController');

// Rutas de la tabla pagos
router.get('/', paymentController.list);          // listar todos
router.post('/', paymentController.save);         // insertar
router.delete('/:id', paymentController.delete);  // eliminar por id
router.get('/:id', paymentController.edit);       // obtener por id
router.post('/:id', paymentController.update);    // actualizar por id

module.exports = router;
