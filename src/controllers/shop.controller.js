function shop (req, res){ //puedo desarrollar todo en una funcion para poder reutilizarlo despues
    res.send('vista de shop')
}

module.exports = {
    shop, // solo llamo al modulo
};