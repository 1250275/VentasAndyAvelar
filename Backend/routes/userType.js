const express = require('express');
const router = express.Router();

const userTypeController = require('../controllers/userTypeController');

// Rutas de la tabla tipousuario
router.get('/', userTypeController.list);          // listar todos
router.post('/', userTypeController.save);         // insertar
router.delete('/:id', userTypeController.delete);  // eliminar por id
router.get('/:id', userTypeController.edit);       // obtener por id
router.post('/:id', userTypeController.update);    // actualizar por id

module.exports = router;
