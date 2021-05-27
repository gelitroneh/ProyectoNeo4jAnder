//Permite crear rutas del servidor
const express = require('express');
const router = express.Router();

 //Se muestra al ingresar a la pagina inicial
router.get('/',(req,res)=>{
    res.render('index');
});

//Se muestra al ingresar a la pagina glosario
router.get('/glosario',(req,res)=>{
    res.render('glosario');
});

module.exports=router;