const express = require('express');
const router = express.Router();

const workAreaController = require('../controllers/workAreaController');

// Rutas de la tabla areas_trabajo
router.get('/', workAreaController.list);          // listar todos
router.post('/', workAreaController.save);         // insertar
router.delete('/:id', workAreaController.delete);  // eliminar por id
router.get('/:id', workAreaController.edit);       // obtener por id
router.post('/:id', workAreaController.update);    // actualizar por id

module.exports = router;
