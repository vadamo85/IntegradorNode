# ChallengeIntegrador-CodoACodo2023

## Comisión nro: 23573

Grupos nro 1 y 5.

### Integrantes:

- Adamo, Valeria Ximena.
- Ayala, Bárbara.
- Bidart, Mónica.
- Chiesa, Fernando.
- García, Fulvia.
- Ezequiel.

El objetivo de este proyecto es contar con un espacio autodidacta y
auto gestionado que le permita al estudiante consolidar el proceso de
aprendizaje de los temas vistos a lo largo de la cursada a través de la
práctica con un fin común y particular.

Premisa del challenge: Como primer proyecto se ha asignado el desarrollo de una tienda en línea de las conocidas figuras coleccionables
Funko Pop y merchandising adicional (como remeras, llaveros y mucho más).

El sitio consta de 2 partes fundamentales.

En primer lugar la tienda en
línea donde los clientes podrán ver todos los productos disponibles,
conocer su precio, stock y características. Además podrán registrarse
para agregar sus productos favoritos al carrito y ver el subtotal que
deben pagar.

En segundo lugar, se necesita contar con las vistas necesarias para
administrar la tienda (admin o backoffice), ver el listado de productos
cargados y su stock, poder agregar, editar y eliminar items y sus
propiedades y que esos cambios se reflejen en tiempo real de cara al
cliente.

Para lograr este objetivo deberásse deberá utilizar las siguientes tecnologías y
herramientas:

- FIGMA
- HTML
- CSS (Bootstrap es opcional)
- Javascript
- GIT y GITHUB
- Node JS + Express JS
- NPM
- Arquitectura MVC
- Template Engines
- MySQL y Gestores de BBDD
- Sequelize

### Mission #1

En esta primera etapa es importante comenzar a crear la estructura
HTML de las diferentes vistas del proyecto, utilizando las etiquetas que
creas necesarias para los diferentes elementos del sitio y teniendo en
cuenta la importancia de la semántica, es decir, el sentido de las
etiquetas al momento de crear cada bloque de contenido. Recuerda que cuando llegue el momento de dar estilos al sitio, algunas
estructuras que hayas creado van a cambiar, por eso es recomendable
en este momento invertir el tiempo en lograr estructuras que reflejen el
diseño en un nivel generalizado.

### Mission #2

Ahora que contamos con la estructura HTML del proyecto el próximo
paso es comenzar a maquetar y estilar mediante CSS todos los
elementos de cada página. Se deben normalizar los estilos y crear un sistema de
diseño desde FIGMA a CSS para que el proceso de desarrollo sea más
sencillo, rápido y escalable.

### Mission #3

Para este mission tenemos dos retos a resolver: (1)Implementar el _slider_ en las páginas de home e ítem. (2) Darle funcionalidad a los botones de _+_ y _–_ en las páginas de ítem y
carrito.

Ahora que contamos con la estructura HTML del proyecto el próximo
paso es comenzar a maquetar y estilar mediante CSS todos los
elementos de cada página. Se deben normalizar los estilos y crear un sistema de
diseño desde FIGMA a CSS para que el proceso de desarrollo sea más
sencillo, rápido y escalable.

### Mission #4

1. Migrar nuestro código a un proyecto de NodeJS + Express.
2. Crear un servidor que devuelva archivos estáticos declarando una
carpeta 'public'.
3. Crear la capa de rutas.
4. Crear los controladores para responder a cada una de esas rutas con texto plano.

### Mission #5

- Instalar y configurar el motor de plantillas EJS.
- Migrar los archivos HTML del proyecto a la capa de VISTA de
nuestra aplicación MVC -> ruta: src/views
- Crear una carpeta partials en la ruta src/views/, crear los archivos
header.ejs y footer.ejs y migrar el código correspondiente a estos
archivos.
- Incluir el header y el footer a cada vista del site.
- Adaptar los componentes internos de cada vista en los casos que
se deban recibir datos dinámicos desde el controlador. Por ej. en la
vista de SHOP en lugar de tener 9 cards con items estáticos, crear
la lógica para que el código HTML de una sola card se repita todas
las veces necesarias como tantos items reciba.
- El controlador de cada ruta debe utilizar el método render() de
express para retornar el archivo correspondiente inyectando la
información que esa vista necesite.
