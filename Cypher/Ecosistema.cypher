// Script para la base de datos ecosistema
// Solo cargarlo una vez
// Si se carga 2 veces usar MATCH (n) WHERE (n:Continente OR n:Pais OR n:Fauna OR n:Flora) DETACH DELETE n 

//Definir nodos
//Continentes
CREATE(EU:Continente{nombreC:"EUROPA",imagenC:"https://i.pinimg.com/originals/a9/2c/e3/a92ce32f14d23ab045f0a865f7695964.png"})
CREATE(AM:Continente{nombreC:"AMERICA",imagenC:"https://preview.free3d.com/img/2019/11/2408236770329101790/mxz8ryum-900.jpg"})
CREATE(ASI:Continente{nombreC:"ASIA",imagenC:"https://i.pinimg.com/originals/82/61/31/826131cf060f360d566b8276b3848ae5.jpg"})
CREATE(O:Continente{nombreC:"OCEANIA",imagenC:"https://1.bp.blogspot.com/-irecsrGPD-M/X1kNwDdlTYI/AAAAAAAAHrI/P0WxEebX0SQ96yr2H-CnBjaoaDhg7fiHQCLcBGAsYHQ/s1767/ocean%25C3%25ADa%2Brelieve006.jpg"})
CREATE(AF:Continente{nombreC:"AFRICA",imagenC:"http://tiposderelieve.com/wp-content/uploads/2019/11/Relieve-de-Africa-min.jpg"})
//Paises
CREATE (ES:Pais{nombreP:"ESPAÑA",clima:"MIXTO",imagenP:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"})
CREATE (F:Pais{nombreP:"FRANCIA",clima:"TEMPLADO",imagenP:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/270px-Flag_of_France.svg.png"})
CREATE (R:Pais{nombreP:"RUSIA",clima:"FRIO",imagenP:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"})
CREATE (C:Pais{nombreP:"CANADA",clima:"FRIO",imagenP:"https://www.ecured.cu/images/5/5b/Bandera_Canada.png"})
CREATE (AU:Pais{nombreP:"AUSTRALIA",clima:"TEMPLADO",imagenP:"https://youtooproject.com/wp-content/uploads/2021/02/Bandera_Australia_Viajar.jpg"})
CREATE (B:Pais{nombreP:"BRASIL",clima:"CALIDO",imagenP:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png"})
CREATE(SU:Pais{nombreP:"SUDAFRICA",clima:"MIXTO",imagenP:"https://www.banderasdelmundo.net/wp-content/uploads/2019/08/bandera-de-sudafrica.jpg"})
CREATE(CH:Pais{nombreP:"CHINA",clima:"TEMPLADO",imagenP:"https://cdn.pixabay.com/photo/2020/04/04/11/45/flag-5001937_960_720.jpg"})
//Fauna
CREATE(LO:Fauna{nombreA:"LOBO",imagenA:"https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/09/25/lobo.jpeg"})
CREATE(OPA:Fauna{nombreA:"OSO PARDO",imagenA:"https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Oso-Pardo-1.jpg"})
CREATE(T:Fauna{nombreA:"TEJON",imagenA:"https://imagenes.lainformacion.com/files/article_amp/uploads/imagenes/2017/09/25/59c8bcc5903f1.jpeg"})
CREATE(OPO:Fauna{nombreA:"OSO POLAR",imagenA:"https://i.ytimg.com/vi/n8TXpXWaINk/maxresdefault.jpg"})
CREATE(AL:Fauna{nombreA:"ALCE",imagenA:"https://www.bioenciclopedia.com/wp-content/uploads/2012/01/moose-800.jpg"})
CREATE(K:Fauna{nombreA:"KANGURO",imagenA:"https://elsouvenir.com/wp-content/uploads/2014/09/Kanguro.jpg"})
CREATE(AR:Fauna{nombreA:"ARMADILLO",imagenA:"https://www.hogarmania.com/archivos/202008/armadillo-portada-1280x720x80xX.jpg"})
CREATE(LE:Fauna{nombreA:"LEON",imagenA:"https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg"})
//FLORA
CREATE(CL:Flora{nombreF:"CLAVEL",imagenF:"https://www.koppert.es/content/_processed_/9/c/csm_Carnation_4cc2972ac4.jpg"})
CREATE(L:Flora{nombreF:"LIRIO",imagenF:"https://www.thecolvinco.com/blog/wp-content/uploads/2018/01/lirio-colvin-blog.jpg"})
CREATE(CA:Flora{nombreF:"CAMOMILA",imagenF:"https://cope-cdnmed.agilecontent.com/resources/jpg/7/9/1527686007097.jpg"})
CREATE(M:Flora{nombreF:"HOJA DE MAPLE",imagenF:"https://cdn.pixabay.com/photo/2015/10/11/09/02/the-maple-leaf-981997_960_720.jpg"})
CREATE(ZD:Flora{nombreF:"ZARZO DORADO",imagenF:"https://static.vecteezy.com/system/resources/previews/001/205/233/non_2x/golden-wattle-australian-wild-flower-photo.jpg"})
CREATE(IA:Flora{nombreF:"IPE AMARILLO",imagenF:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Ipe_amarelo.JPG"})
CREATE(AC:Flora{nombreF:"ACACIAS",imagenF:"https://previews.123rf.com/images/cynoclub/cynoclub1305/cynoclub130500128/19986758-flores-de-acacia-rosa-en-un-d%C3%ADa-de-la-primavera.jpg"})
//Definir relaciones
CREATE
    //Posicion de continentes
    (EU)-[:FRONTERA{ubicacion:["ESTE"]}]->(ASI),
    (EU)-[:FRONTERA{ubicacion:["SUR"]}]->(AF),
    (ASI)-[:FRONTERA{ubicacion:["OESTE"]}]->(EU),
    (ASI)-[:FRONTERA{ubicacion:["SUR"]}]->(O),
    (ASI)-[:FRONTERA{ubicacion:["SUDOESTE"]}]->(AF),
    (AF)-[:FRONTERA{ubicacion:["NORTE"]}]->(EU),
    (AF)-[:FRONTERA{ubicacion:["NORESTE"]}]->(ASI),
    //Asignar paises a continentes
    (EU)-[:CONTIENE{ubicacion:["SUDOESTE"]}]->(ES),
    (EU)-[:CONTIENE{ubicacion:["ESTE"]}]->(R),
    (EU)-[:CONTIENE{ubicacion:["OESTE"]}]->(F),
    (AM)-[:CONTIENE{ubicacion:["NORTE"]}]->(C),
    (AM)-[:CONTIENE{ubicacion:["SUR"]}]->(B),
    (O)-[:CONTIENE{ubicacion:["CENTRO"]}]->(AU),
    (AF)-[:CONTIENE{ubicacion:["SUR"]}]->(SU),
	(ASI)-[:CONTIENE{ubicacion:["OESTE"]}]->(R),
    //Asignar fauna a paises
    (ES)-[:HABITA{ubicacion:["NORTE"]}]->(LO),
    (ES)-[:HABITA{ubicacion:["NORTE"]}]->(OPA),
    (F)-[:HABITA{ubicacion:["CENTRO"]}]->(T),
    (R)-[:HABITA{ubicacion:["EXTERIORES"]}]->(OPO),
    (C)-[:HABITA{ubicacion:["TODO EL TERRITORIO"]}]->(AL),
    (AU)-[:HABITA{ubicacion:["TODO EL TERRITORIO"]}]->(K),
    (B)-[:HABITA{ubicacion:["CENTRO"]}]->(AR),
    (SU)-[:HABITA{ubicacion:["CENTRO"]}]->(LE),
    //Asignar flora a paises
    (ES)-[:FLORECE{ubicacion:["NORTE"]}]->(CL),
    (F)-[:FLORECE{ubicacion:["CENTRO"]}]->(L),
    (R)-[:FLORECE{ubicacion:["EXTERIORES"]}]->(CA),
    (C)-[:FLORECE{ubicacion:["TODO EL TERRITORIO"]}]->(M),
    (AU)-[:FLORECE{ubicacion:["TODO EL TERRITORIO"]}]->(ZD),
    (B)-[:FLORECE{ubicacion:["CENTRO"]}]->(IA),
    (SU)-[:FLORECE{ubicacion:["CENTRO"]}]->(AC)