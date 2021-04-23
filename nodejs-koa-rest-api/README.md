# Entities REST API

_REST API that exposes entity data_

## Getting Started
_These instructions will allow you to get a copy of the project running on your local machine for development purposes._

### Requirements

* [nodejs](https://nodejs.org/es)

### Installation

_Install project dependencies using npm_

```
npm install
```

_Create the src/config.yml file from the src/config.template.yml file, replacing the corresponding configuration variables_

_Start the project using the following command_

```
npm start
```

_For making a request, send the following HTTP request to localhost:3000, with the id to consult_

```
GET /entity/{{id}} HTTP/1.1
```

## Dependencies

* [Koa](https://koajs.com) - Framework web
* [Mongodb](https://www.mongodb.com/es) - NoSQL Database
* [Typescript](https://www.typescriptlang.org/) - Javascript Superset
