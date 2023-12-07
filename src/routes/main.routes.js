const express = require('express');
const router = express.Router();

router.get('/home',(req, res) => res.send('Esta es la vista de home'));