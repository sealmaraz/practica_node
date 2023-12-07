//para eliminar un item
const delete_btn = document.getElementById('button');

delete_btn.addEventListener('click', ()=>{
    fetch('localhost:3003?ad/item/:1');
});

//debería agregar el js desde el archivo html