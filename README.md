# Frontend Test ML

## Descripción

El test consta de una aplicación "mlt-api" (backend) realizada con node/Express que actúa como middleware de la API de ML y una aplicación "mlt-client" (front) desarrollada en React17 que consume dicha "mlt-api".

El backend es una aplicación estándar node/Express estructurada en rutas, contoladoras, servicios y algunos helpers. Tiene pocas dependencias adicionales, axios para hacer peticiones a la API de ML, cors, dotenv y morgan.

El front está realizado utilizando React17 con Typescript. 
Para la gestión del estado se usa React-Redux (con Redux Toolkit) y Redux-Saga para manejar los side effects.
También se utilizan algunas librerías para componentes visuales como el loader y las notificaciones.
Se realizó un diseño responsive basado en css-grid con media queries utilizando SASS.

### Consideraciones

Fue mi primer contacto con Redux Toolkit (RT) y la combinación css-grid/SASS.
Utilicé RT por la promesa de simplificar todo el boilerplate necesario para utilizar redux... algo mejora, pero aún es mucho.
Los requerimientos decían que era deseable usar SASS así que aunque no tuviera experiencia decidí usarlo, por eso de salir de la zona de confort, además siempre se puede mejorar. Lo mismo con css-grid, las especificaciones mostraban una grilla y decidí intentar implementarla usando css-grid y darle responsive con media queries.

## Requerimientos

NodeJS Version >= 14.16.0 (LTS, includes npm 6.14.11).

## Instalación y ejecución:

### Proyecto "mlt-api"

Ingresar a la carpeta mlt-api.
Renombrar el archivo .env.template a .env.
Ejecutar "npm install" para instalar las dependencias necesarias.
Ejecutar "npm start" para iniciar la aplicación.

### Proyecto "mlt-client"

Ingresar a la carpeta mlt-client.
Ejecutar "npm install" para instalar las dependencias necesarias.
Ejecutar "npm start" para iniciar la aplicación.

## TODO

### Front

Utilizar dotenv para utilizar parámetros hoy harcodeados (rutas en sagas por ejemplo).
Mejorar estilos SASS y uso de css-grid.
Mover textos harcodeados hacia archivos independientes para este fin (messges.ts?).
Investigar implementación de lazy load para imágenes.
Investigar implementaciones para ayudar al SEO.
Investigar como implementar StoryBook para tener un directorio visual de componentes con snapshots (tests visuales).
Investigar como implementar Cypress para ejecutar tests "End to End".
PWA? (& manifest.json).

### Backend

Agregar Typescript.
Investigar como implementar Jest y Supertest para ejecutar tests.
Investigar como implementar documentación usando Swagger.