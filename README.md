# desafio12
## VIEWS 
Maquetado del front-end con plantillas - html , conectados con el archivo js de la carpeta public, donde tambien se encuentra el CSS.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

## SRC
Carpetas y dos archivos JS:

### MAIN.JS
Configuraciones del servidor express e importaciones de los modulos utilizados

### CONFIG.JS 
Configuraciones de rutas, mongo, sql. Para los controladores.

### CARPETA ROUTERS 
Carpetas adicionales:

#### CARPETA API
Productos.js, ruta (api rest) que con GET ejecuta una funcion que muestra en el DOM cinco productos random (funcion definida en al carpeta MOCK, basada en metodos de FAKER)

#### CARPETA WEB
Metodos de autenticacion utilizados en el desafio, definidos en el archivo AUTH.JS, realizadas las autenticaciones establecidas en el archivo AUTH,redirige al HOME.JS donde se utiliza un middleware definido en en la carpeta AUTH (sin nombre guardado en sesion, redirige al login.)

#### CARPETA WS
"Canales" del socket donde se recibe y envia info, utilizando los metodos definidos en el api, que se extienden de los controllers.
