const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');

// Rutas de la tabla empresa
router.get('/', companyController.list);          // listar todos
router.post('/', companyController.save);         // insertar
router.delete('/:id', companyController.delete);  // eliminar por id
router.get('/:id', companyController.edit);       // obtener por id
router.post('/:id', companyController.update);    // actualizar por id

module.exports = router;
