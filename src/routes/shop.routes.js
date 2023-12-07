//Item, Shop, Carrito (ventas y tienda)

const express = require('express');
const { shop} = require('../controllers/shop.controller');
//para buscar la ruta del estatico
const path = require('path');
const router = express.Router();
router.get('/shop', shop);
router.get('/',(req, res) => res.sendFile(path.resolve(__dirname,'../../public/pages/shop.html')));
router.get('/item/:id',(req, res) => {
    const { id } = req.params;
    res.send(`Usted solicitó el item: ${id}`)
    //const { search} = req.query; para traer valores del query
});
//router.get('/contacto',(req, res) => res.send('Esta es la vista de contactos'));
//router.get('/faqs',(req, res) => res.send('Esta es la vista de preguntas frecuentes'));

module.exports = router;