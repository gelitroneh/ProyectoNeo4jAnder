//Modulos requeridos
const express = require('express');
//No es constante ya que se le asignara el driver sesion
var session = require('express-session');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');


//Requerimiento del driver de Neo4j
const neo4j = require('neo4j-driver');

//Inicializacion
const app = express();


//Configuracion
app.set('port',process.env.PORT||3000);//Puerto 3000(Por donde sale la informacion)
app.set('views',path.join(__dirname,'views'));//Configuracion de la carpeta vistas
app.set('view engine','ejs');//Tipo de archivo para las vistas


//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//Conexion en entorno local
//Conexion con Neo4j        //Puerto de Neo4j
//const driver = neo4j.driver('bolt://localhost:7687',neo4j.auth.basic('neo4j','password'));

//Conexion usando docker
//Conexion con Neo4j        //Puerto de Neo4j
const driver = neo4j.driver('bolt://neo4j',neo4j.auth.basic('neo4j','password'));

session = driver.session();
session2 = driver.session();
session3 = driver.session();
session4 = driver.session();
session5 = driver.session();
session6 = driver.session();
session7 = driver.session();
session8 = driver.session();
session9 = driver.session();
session10 = driver.session();
session11= driver.session();
session12= driver.session();
session13= driver.session();
session14= driver.session();


//introduce la informacion en esa direccion
app.get('/glosario',function(req,res){

    //Mostrar Continentes
    session
    //Consulta a la base de datos Neo4j
    .run('MATCH(n:Continente) RETURN n LIMIT 100')
    .then(function(result){
        //Array con los continentes
        var continentesArr = [];
        result.records.forEach(function(record){
           continentesArr.push({
                id:record._fields[0].identity.low,
                nombreC: record._fields[0].properties.nombreC,
                imagenC: record._fields[0].properties.imagenC
            });
        });

    //Mostrar Paises
    session
    //Consulta a la base de datos Neo4j
    .run('MATCH(n:Pais) RETURN n LIMIT 100')
    .then(function(result){
        //Array con los paises
        var paisesArr = [];
        result.records.forEach(function(record){
            paisesArr.push({
                id:record._fields[0].identity.low,
                nombreP: record._fields[0].properties.nombreP,
                imagenP: record._fields[0].properties.imagenP
            });
        });

    //Mostrar animales
    session
    //Consulta a la base de datos Neo4j
    .run('MATCH(n:Fauna) RETURN n LIMIT 100')
    .then(function(result){
        //Array con los animales
        var animalesArr = [];
        result.records.forEach(function(record){
            animalesArr.push({
                id:record._fields[0].identity.low,
                nombreA: record._fields[0].properties.nombreA,
                imagenA: record._fields[0].properties.imagenA
            });
        });

        //Mostrar plantas
        session
        .run('MATCH(n:Flora) RETURN n LIMIT 100')
        .then(function(result){
            //Array con las plantas
            var floresArr = [];
            result.records.forEach(function(record){
                floresArr.push({
                    id:record._fields[0].identity.low,
                    nombreF: record._fields[0].properties.nombreF,
                    imagenF: record._fields[0].properties.imagenF
                });
            });

        //Pasamos ese array a la vista
        res.render('glosario',{
            animales:animalesArr,
            flores:floresArr,
            paises:paisesArr,
            continentes:continentesArr,
        });
        })
        .catch(function(err){
            console.log(err);
         });
    })
    .catch(function(err){
        console.log(err);
    });
})
.catch(function(err){
    console.log(err);
});
})
.catch(function(err){
    console.log(err);
    });
});


//Añadir paises
app.post('/pais/add',function(req,res){
    var nombreP=req.body.nombreP;
    var imagenP =req.body.imagenP;
    
//Nueva sesion
session2
    //Consulta que crea el pais introducido con su imagen
    .run('CREATE(n:Pais {nombreP:$nombreParametro,imagenP:$imagenParametro}) RETURN n.nombreP,n.imagenP',{nombreParametro:nombreP,imagenParametro:imagenP})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});

//Añadir Fauna
app.post('/fauna/add',function(req,res){
    var nombreA=req.body.nombreA;
    var imagenA =req.body.imagenA;

//Nueva sesion
session3
    //Consulta que crea el animal introducido con su imagen
    .run('CREATE(n:Fauna {nombreA:$nombreParametro,imagenA:$imagenParametro}) RETURN n.nombreA,n.imagenA',{nombreParametro:nombreA,imagenParametro:imagenA})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});

//Añadir Flora
app.post('/flora/add',function(req,res){
    var nombreF=req.body.nombreF;
    var imagenF=req.body.imagenF;

//Nueva sesion
session4
    //Consulta que crea la flor introducida con su imagen
    .run('CREATE(n:Flora {nombreF:$nombreParametro,imagenF:$imagenParametro}) RETURN n.nombreF,n.imagenF',{nombreParametro:nombreF,imagenParametro:imagenF})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});
//Creacion de relaciones
//Relacion animal-pais
app.post('/fauna/pais/add',function(req,res){
    var nombreP = req.body.nombreP;
    var nombreA = req.body.nombreA;

//Nueva sesion
session5
    //Consulta que crea la relacion
    .run('MATCH(a:Pais {nombreP:$nombrePais}),(b:Fauna{nombreA:$nombreAnimal}) MERGE(a)-[r:HABITA]-(b) RETURN a.nombreP,b.nombreA',{nombrePais:nombreP,nombreAnimal:nombreA})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});

//Relacion flor-pais
app.post('/flora/pais/add',function(req,res){
    var nombreP = req.body.nombreP;
    var nombreF = req.body.nombreF;

//Nueva sesion
session6
    //Consulta que crea la relacion
    .run('MATCH(a:Pais {nombreP:$nombrePais}),(b:Flora{nombreF:$nombreFlor}) MERGE(a)-[r:FLORECE]-(b) RETURN a.nombreP,b.nombreF',{nombrePais:nombreP,nombreFlor:nombreF})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});

//Relacion pais-Continente
app.post('/pais/continente/add',function(req,res){
    var nombreC = req.body.nombreC;
    var nombreP = req.body.nombreP;

//Nueva sesion
session7
    //Consulta que crea la relacion
    .run('MATCH(a:Continente {nombreC:$nombreCon}),(b:Pais{nombreP:$nombrePais}) MERGE(a)-[r:CONTIENE]-(b) RETURN a.nombreC,b.nombreP',{nombreCon:nombreC,nombrePais:nombreP})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});

//Borrar nodos
//Borrar paises
app.post('/pais/delete',function(req,res){
    var nombreP=req.body.nombreP;

//Nueva sesion
session8
    //Consulta que borra el pais introducido
    .run('MATCH(n:Pais {nombreP:$nombreParametro}) DELETE n',{nombreParametro:nombreP})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});

//Borrar Fauna
app.post('/fauna/delete',function(req,res){
    var nombreA=req.body.nombreA;

//Nueva sesion
session9
    //Consulta que borra el animal introducido
    .run('MATCH(n:Fauna {nombreA:$nombreParametro}) DELETE n',{nombreParametro:nombreA})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});

//Borrar Flora
app.post('/flora/delete',function(req,res){
    var nombreF=req.body.nombreF;

//Nueva sesion
session10
    //Consulta que borra la planta introducido
    .run('MATCH(n:Flora {nombreF:$nombreParametro}) DELETE n',{nombreParametro:nombreF})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close();
    })
    .catch(function(err){
    });
    res.redirect('/glosario');
});

//Borrar relaciones

//Borrar la relacion animal-pais
app.post('/fauna/pais/delete',function(req,res){
    var nombreP = req.body.nombreP;
    var nombreA = req.body.nombreA;

//Nueva sesion
session11
    //Consulta que borra la relacion
    .run('MATCH(n)-[rel:HABITA]->(r)WHERE n.nombreP=$nombrePais AND r.nombreA=$nombreAnimal DELETE rel',{nombrePais:nombreP,nombreAnimal:nombreA})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});

//Borrar la relacion planta-pais
app.post('/flora/pais/delete',function(req,res){
    var nombreP = req.body.nombreP;
    var nombreF = req.body.nombreF;

//Nueva sesion
session12
    //Consulta que borra la relacion
    .run('MATCH(n)-[rel:FLORECE]->(r)WHERE n.nombreP=$nombrePais AND r.nombreF=$nombrePlanta DELETE rel',{nombrePais:nombreP,nombrePlanta:nombreF})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});

//Borrar la relacion continente-pais
app.post('/pais/continente/delete',function(req,res){
    var nombreC = req.body.nombreC;
    var nombreP = req.body.nombreP;

//Nueva sesion
session13
    //Consulta que borra la relacion
    .run('MATCH(n)-[rel:CONTIENE]->(r)WHERE n.nombreC=$nombreCon AND r.nombreP=$nombrePais DELETE rel',{nombreCon:nombreC,nombrePais:nombreP})
    .then(function(result){
        res.setHeader('Acces-Control-Allow-Origin','*');
        session.close(); 
    })
    .catch(function(err){
        console.log(err);
    });
    res.redirect('/grafo');
});
//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/glosario'));
app.use(require('./routes/grafo'));
app.use(require('./routes/consultas'));
//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//npm run dev para iniciar en local
//docker compose up para iniciar con docker
app.listen(app.get('port'),()=>{

    //Funcionando en local
    //console.log("El servidor se encuentra en el puerto",app.get('port'));

    //Funcionando en docker
    console.log("El servidor se encuentra en el puerto 5000"); 
});

module.exports = app; 