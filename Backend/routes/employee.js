const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

// Rutas de la tabla empleados
router.get('/', employeeController.list);          // listar todos
router.post('/', employeeController.save);         // insertar
router.delete('/:id', employeeController.delete);  // eliminar por id
router.get('/:id', employeeController.edit);       // obtener por id
router.post('/:id', employeeController.update);    // actualizar por id

module.exports = router;
