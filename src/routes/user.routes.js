//login

const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{ //trae la vista de la pagina
    res.send('Vista de login');
});

router.post('/login', (req, res)=>{ //con el req leo lo que se manda desde el form
    const { user, password } = req.body;
    console.log(req.body);
    res.send('Solicitud de login' + user + password);
}); //trae la consulta de la vista
module.exports = router;