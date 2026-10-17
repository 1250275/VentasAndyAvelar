const express = require('express');
const router = express.Router();

const paymentMethodController = require('../controllers/paymentMethodController');

// Rutas de la tabla formapago
router.get('/', paymentMethodController.list);          // listar todos
router.post('/', paymentMethodController.save);         // insertar
router.delete('/:id', paymentMethodController.delete);  // eliminar por id
router.get('/:id', paymentMethodController.edit);       // obtener por id
router.post('/:id', paymentMethodController.update);    // actualizar por id

module.exports = router;
