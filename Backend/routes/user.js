const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Rutas de la tabla usuario
router.get('/', userController.list);          // listar todos
router.post('/', userController.save);         // insertar
router.delete('/:id', userController.delete);  // eliminar por id
router.get('/:id', userController.edit);       // obtener por id
router.post('/:id', userController.update);    // actualizar por id

module.exports = router;
