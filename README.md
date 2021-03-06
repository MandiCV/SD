# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._
Esto funciona en Ubuntu 20.04 LTS

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Ver **Deployment** para conocer c贸mo desplegar el proyecto.

### Pre-requisitos 馃搵

_Qu茅 cosas necesitas para instalar el software y c贸mo instalarlas_

Para este caso necesitaremos instalar MongoDB y NodeJS y descargar y descomprimir en una carpeta todos los archivos del repositorio.

Para instalar MOngoDB habr谩 que seguir los siguientes pasos:

1. Abrimos un terminar nuevo

2. Accedemos a nuestra carpeta enlazada con Github o Bitbucked en nuestro caso `$ cd node/api-rest` 

3. Actualizamos con `$ sudo apt update`

4. Instalamos MongoDB con `$ sudo apt install -y mongodb`

	4.1  si ocurre alg煤n error debido a que se interrumpe la ejecuci贸n dpkg, poner `$ sudo dpkg --configure --a` y volver al paso 4

En cuanto a la instalaci贸n de NodeJS:

1.  Como en la instalaci贸n de MongoDB volvemos a actualizar con 
	`$ sudo apt update`
2. Instalamos el gestor de paquetes de Node (npm)
	`$ sudo apt install npm`
3. A continuaci贸n, instalamos con npm una utilidad que ayuda a instalar y mantener las versiones de Node
(se denomina n)
	`$ sudo npm clean -f`
	`$ sudo npm i -g n`
4. Finalmente, instalamos la 煤ltima versi贸n estable de Node JS a trav茅s de la utilidad n
	`$ sudo n stable`
5. Podemos comprobamos las versiones instaladas
	`$ node --version`
	`$ npm -v`
### Instalaci贸n 馃敡

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

Para empezar inicializaremos la base de datos en nuestro terminal.Para ello haremos Ctrl+Alt+T para abrir una nueva pesta帽a.

Gracias a Systemctl podremos iniciar la base de datos. `$ sudo systemctl start mongodb`

Nota: Podemos comprobar su funcionamiento con `$ mongo --eval 'db.runCommand({connectionstatus:1})'`

En otro terminal, (ctrl+alt+T) y dentro de nuestra carpeta enlazada al repositorio remoto donde previamente tenemos instalado Nodemon para no tener que estar constantemente
reiniciando nuestra aplicaci贸n con cada cambio en el c贸digo. (es opcional pero si no est谩 instalado previamente y se desea instalar ejecutamos `$ npm i -D nodemon`) y tambi茅n tenemos instalado Morgan
(tambi茅n opcional `$ npm i -S morgan`) debido a que proporciona registro de peticiones y respuestas en nuestra aplicaci贸n Express y as铆 podemos visualizar los _logs_ desde terminal. Ejecutaremos
`$ npm start`para iniciar nodemon , y en otra terminal inicializaremos nuestra base de datos con `$ mongo --host localhost:27017`.

Ahora teniendo todo preparado con un editor de texto, nosotros usaremos code, para lo cual haremos `$ code .` para abrir todos los ficheros de nuestra carpeta, pegaremos todos los archivos del Github en la carpeta y en concreto nos interesa index.js. En este archivo podemos visualizar todos los _end-point_. En este caso contaremos con unafunci贸n Get que te devuelve todas las colecciones `app.get('/api')`, un GET que te devuelve los registros de una colecci贸n en concreto `app.get('/api/:coleccion')` y un GET que te devuelve un registro de una colecci贸n `app.get('/api/:coleccion/:id')`.
Adem谩s contamos con un _end-pint_ POST `app.post('/api/:coleccion')` para a帽adir registros a una colecci贸n, PUT `app.put('/api/:coleccion/:id')` para actualizar los registros y DELETE `app.delete('/api/:coleccion/:id')` para borrar un registro.

Podemos hacer una peque帽a prueba en el terminal para que nos devuelva las colecciones creadas, buscando en el navegador <http://localhost:3000/api> lo cual nos devolver谩 un registro de nuestras colecciones, si est谩 vacio es que no contamos con ninguna en este momento.

## Ejecutando las pruebas 鈿欙笍

Para ejecutar las pruebas tendremos que importar el archivo crud.postman_collection.json en el que hay una colecci贸n exportada de Postman. Para esto en nuestro caso usaremos Postman. 
Si no usas Postman saltar el siguiente p谩rrafo.

Para esto tendremos que tener una cuenta en Postman e instalarlo `$ sudo snap install postman`
Posteriormente iniciamos postman e importamos el archivo crud.postman_collection.json.

Una vez con la colecci贸n importada podemos ejecutar cualquier _end-point_ en este caso tendr茅mos aparte de los _end-point_ vistos en index.js, dos POST, uno para la colecci贸n familia y otro para la colecci贸n mascotas, pero se puede pillar cualquiera de estas colecciones como ejemplo para crear otras.

Adem谩s si hemos activado Nodemon podremos ver como funciona la ejecuci贸n en el terminal.


## Construido con 馃洜锔?

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 馃枃锔?

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/MandiCV/SD) para detalles de nuestro c贸digo de conducta, y el proceso para enviarnos pull requests.

## Wiki 馃摉

Puedes encontrar mucho m谩s de c贸mo utilizar este proyecto en nuestra [Wiki](https://github.com/MandiCV/SD/wiki)

## Versionado 馃搶

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/MandiCV/SD/tags).

## Autores 鉁掞笍

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Paco Maci谩** - *Trabajo Inicial* - [pmacia](https://github.com/pmacia)
* **Amanda Cascales** - *Documentaci贸n* - [MandiCV](https://github.com/MandiCV)

Tambi茅n puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) qui茅nes han participado en este proyecto. 

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 馃巵

* Comenta a otros sobre este proyecto 馃摙
* Invita una cerveza 馃嵑 o un caf茅 鈽? a alguien del equipo. 
* Da las gracias p煤blicamente 馃.
* etc.







