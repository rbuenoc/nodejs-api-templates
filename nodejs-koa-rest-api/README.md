# Entities REST API

_API de entidades_

## Como comenzar
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

### Pre-requisitos

_Cosas que necesitas para instalar el software_

* [nodejs](https://nodejs.org/es)

### Instalación

_Instalar las dependencias del proyecto utilizando npm_

```
npm install
```

_Crear el archivo src/config.yml a partir del archivo src/config.template.yml, sustituyendo las variables de configuración correspondientes_

_Inicia el proyecto utilizando el siguiente comando_

```
npm start
```

_Para consultar datos de productos, utilizar la siguiente petición a localhost:3000, con el id a consultar_

```
GET /entity/{{id}} HTTP/1.1
```

## Dependencias

* [Koa](https://koajs.com) - Framework web
* [Mongodb](https://www.mongodb.com/es) - NoSQL Database
* [Typescript](https://www.typescriptlang.org/) - Javascript Superset
