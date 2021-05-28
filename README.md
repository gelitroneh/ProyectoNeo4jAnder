# Proyecto Neo4j Ander Pardo
Proyecto Neo4j con Node.js

----PONER A FUNCIONAR EL PROYECTO----

Para el despliegue del proyecto se ha utilizado docker pero si se desea correr sin docker tambien se ha dejado la posibilidad de hacerlo

-------------CON DOCKER--------------

1-Clonar el proyecto

2-Situarte con la terminal en la carpeta de proyecto

3-Ejecutar el comando "docker-compose build"

4-Ejecutar el comando "docker compose up"

5-Los puertos son los siguientes:

-5000 para el proyecto

-1000 para el browser

-1001 para la conexion

-El usuario administrador de la base de datos es neo4j y su contraseña es password

6-Situarse en el localhost:5000 para ver el proyecto


-------------DE FORMA LOCAL-------------

1-Clonar el proyecto

2-Abrir el proyecto en una terminal

3-Ejecutar el comando "npm install" para instalar las dependencias 

4-Comentar las lineas:

35 y 378 en app.js 

49 en grafo.ejs

Descomentar las lineas:

31 y 375 en app.js

46 en grafo.ejs 

5-Iniciar tu neo4j desktop

6-Llenar la base de datos que se va a cargar con el archivo cypher del proyecto

7-Ejecutar el comando "npm run dev"

8-Los puertos son:

-3000 para el proyecto 

-7474 para el browser de neo4j

-7687 para la conexion

9-Situarse en el localhost:3000 para ver el proyecto
