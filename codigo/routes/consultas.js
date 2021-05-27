//Permite crear rutas del servidor
const express = require('express');
const router = express.Router();

//Ruta para acceder al glosario
router.get('/consultas',(req,res)=>{
    //Renderiza al archivo consultas
    res.render('consultas');
})

module.exports=router;