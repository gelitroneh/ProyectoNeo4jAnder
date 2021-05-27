//Permite crear rutas del servidor
const express = require('express');
const router = express.Router();

//Ruta para acceder al grafo
router.get('/grafo',(req,res)=>{
    //Renderiza al archivo grafo
    res.render('grafo');
})

module.exports=router;