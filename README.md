# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._
Esto funciona en Ubuntu 20.04 LTS

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

_Qué cosas necesitas para instalar el software y cómo instalarlas_

Para este caso necesitaremos instalar MongoDB y NodeJS y descargar y descomprimir en una carpeta todos los archivos del repositorio.

Para instalar MOngoDB habrá que seguir los siguientes pasos:

1. Abrimos un terminar nuevo

2. Accedemos a nuestra carpeta enlazada con Github o Bitbucked en nuestro caso `$ cd node/api-rest` 

3. Actualizamos con `$ sudo apt update`

4. Instalamos MongoDB con `$ sudo apt install -y mongodb`

	4.1  si ocurre algún error debido a que se interrumpe la ejecución dpkg, poner `$ sudo dpkg --configure --a` y volver al paso 4

En cuanto a la instalación de NodeJS:

1.  Como en la instalación de MongoDB volvemos a actualizar con 
	`$ sudo apt update`
2. Instalamos el gestor de paquetes de Node (npm)
	`$ sudo apt install npm`
3. A continuación, instalamos con npm una utilidad que ayuda a instalar y mantener las versiones de Node
(se denomina n)
	`$ sudo npm clean -f`
	`$ sudo npm i -g n`
4. Finalmente, instalamos la última versión estable de Node JS a través de la utilidad n
	`$ sudo n stable`
5. Podemos comprobamos las versiones instaladas
	`$ node --version`
	`$ npm -v`
### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

Para empezar inicializaremos la base de datos en nuestro terminal.Para ello haremos Ctrl+Alt+T para abrir una nueva pestaña.

Gracias a Systemctl podremos iniciar la base de datos. `$ sudo systemctl start mongodb`

Nota: Podemos comprobar su funcionamiento con `$ mongo --eval 'db.runCommand({connectionstatus:1})'`

En otro terminal, (ctrl+alt+T) y dentro de nuestra carpeta enlazada al repositorio remoto donde previamente tenemos instalado Nodemon para no tener que estar constantemente
reiniciando nuestra aplicación con cada cambio en el código. (es opcional pero si no está instalado previamente y se desea instalar ejecutamos `$ npm i -D nodemon`) y también tenemos instalado Morgan
(también opcional `$ npm i -S morgan`) debido a que proporciona registro de peticiones y respuestas en nuestra aplicación Express y así podemos visualizar los _logs_ desde terminal. Ejecutaremos
`$ npm start`para iniciar nodemon , y en otra terminal inicializaremos nuestra base de datos con `$ mongo --host localhost:27017`.

Ahora teniendo todo preparado con un editor de texto, nosotros usaremos code, para lo cual haremos `$ code .` para abrir todos los ficheros de nuestra carpeta, pegaremos todos los archivos del Github en la carpeta y en concreto nos interesa index.js. En este archivo podemos visualizar todos los _end-point_. En este caso contaremos con unafunción Get que te devuelve todas las colecciones `app.get('/api')`, un GET que te devuelve los registros de una colección en concreto `app.get('/api/:coleccion')` y un GET que te devuelve un registro de una colección `app.get('/api/:coleccion/:id')`.
Además contamos con un _end-pint_ POST `app.post('/api/:coleccion')` para añadir registros a una colección, PUT `app.put('/api/:coleccion/:id')` para actualizar los registros y DELETE `app.delete('/api/:coleccion/:id')` para borrar un registro.

Podemos hacer una pequeña prueba en el terminal para que nos devuelva las colecciones creadas, buscando en el navegador <http://localhost:3000/api> lo cual nos devolverá un registro de nuestras colecciones, si está vacio es que no contamos con ninguna en este momento.

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas tendremos que importar el archivo crud.postman_collection.json en el que hay una colección exportada de Postman. Para esto en nuestro caso usaremos Postman. 
Si no usas Postman saltar el siguiente párrafo.

Para esto tendremos que tener una cuenta en Postman e instalarlo `$ sudo snap install postman`
Posteriormente iniciamos postman e importamos el archivo crud.postman_collection.json.

Una vez con la colección importada podemos ejecutar cualquier _end-point_ en este caso tendrémos aparte de los _end-point_ vistos en index.js, dos POST, uno para la colección familia y otro para la colección mascotas, pero se puede pillar cualquiera de estas colecciones como ejemplo para crear otras.

Además si hemos activado Nodemon podremos ver como funciona la ejecución en el terminal.


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/MandiCV/SD) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/MandiCV/SD/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/MandiCV/SD/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Paco Maciá** - *Trabajo Inicial* - [pmacia](https://github.com/pmacia)
* **Amanda Cascales** - *Documentación* - [MandiCV](https://github.com/MandiCV)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.







