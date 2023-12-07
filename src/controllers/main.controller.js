module.exports = {
    home:(req,res)=>{
        res.render('home',{
            title: "Home Funkoshop"
        });
    },

    contacto:(req,res)=>{
        res.send('Vista de contacto');
    },

    faqs:(req,res)=>{
        res.send('Vista de Preguntas frecuentes');
    }
};