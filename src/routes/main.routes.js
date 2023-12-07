//Contacto
//Preguntas frecuentes
//Home

const express = require('express');
//para buscar la ruta del estatico
const path = require('path');
const router = express.Router();

const { home, contacto, faqs} = require('../controllers/main.controller');

router.get('/home', home);
router.get('/contacto', contacto);
router.get('/faqs', faqs);

module.exports = router;