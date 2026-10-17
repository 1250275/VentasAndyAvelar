const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branchController');

// Rutas de la tabla sucursales
router.get('/', branchController.list);          // listar todos
router.post('/', branchController.save);         // insertar
router.delete('/:id', branchController.delete);  // eliminar por id
router.get('/:id', branchController.edit);       // obtener por id
router.post('/:id', branchController.update);    // actualizar por id

module.exports = router;
