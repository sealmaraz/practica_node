const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 3002;

app.use(express.static('public_html'));

app.listen(PORT,()=> console.log(`Escuchando en el puerto http://localhost:${PORT}`));

// app.get('/items',(req, res)=>{
//     const data = fs.readFileSync(__dirname + '/src/data/item.json');
//     // console.log(data);
//     // res.send (JSON.parse(data));
//     const items = JSON.parse(data);
//     if (req.query.search){
//         const result = items.filter(item => item.item_name.toLowerCase().includes(req.query.search));
//         res.send(result);
//     }else
//         res.sendFile(__dirname + '/src/data/item.json');
// });

// app.get('/items/:id',(req, res)=>{
    
//     const data = fs.readFileSync(__dirname + '/src/data/item.json');
//     // Const item = JSON.parse(data);
//     const item_b = JSON.parse(data);
//     // console.log(JSON.parse(data));
//     const selected = item_b.find(item => item.id == req.params.id);
//     res.send(selected);
    
//     // res.send (JSON.parse(data));
// });
