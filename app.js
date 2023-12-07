const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); //midelware para poder escuchar metodos put, path y delete
// const fs = require('fs');
const app = express();
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const userRoutes = require('./src/routes/user.routes');
const adminRoutes = require('./src/routes/admin.routes');

const PORT = 3003;

//Template Engines

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./src/views'));
//Midelwares de configuración
app.use(express.static('public'));
app.use(express.urlencoded()); // para entender url, si usamos post usamos esto
app.use(express.json()); //para entender json y lo convierta en datos trabajabls, si usamos post usamos esto
app.use(methodOverride('_method'));
//Rutas
app.use('/admin', adminRoutes);
app.use('/auth', userRoutes);
app.use('/shop', shopRoutes);
app.use('/', mainRoutes);

app.use((req, res)=>{ //midelware para devolver una pagina de error si no existe el sitio
    res.status(404).send('La pagina que buscas no existe');
});

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
