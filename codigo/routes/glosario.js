//Permite crear rutas del servidor
const express = require('express');
const router = express.Router();

//Ruta para acceder al glosario
router.get('/glosario',(req,res)=>{
    //Renderiza al archivo glosario
    res.render('glosario');
})


module.exports=router;