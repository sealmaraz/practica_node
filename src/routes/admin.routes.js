//Item, Admin, Edicion de Items

const express = require('express');
const router = express.Router();

router.post('/item/:id',(req,res)=>{
    const {id} = req.params;
    res.send(`Está seguro de eliminar el archivo?: ${id}`);
});

router.delete('/item/:id/delete',(req, res)=>{

});

module.exports =router;