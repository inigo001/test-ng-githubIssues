# TestNgGithubIssues

Proyecto Generado con [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Qué es

Este es un proyecto de prueba creado en Angular que lista las issues de un proyecto de Github.

### Cómo funciona

Escribe la URL del repositorio (_https://github.com/inigo001/test-ng-githubIssues_) o el usuario/repositorio (_inigo001/test-ng-githubIssues_) a buscar.  

Si el dato introducido es correcto el sistema listará las 30 primeras issues del repositorio, abiertas o cerradas.

## Instalación

Requiere [@angular/cli](https://www.npmjs.com/package/@angular/cli). En caso de no estar instalado:

```
npm install -g @angular/cli
```

Una vez instalado @angular/cli y descargado el proyecto correr los siguientes comandos dentro de la carpeta:

```
npm update
ng serve
```

Si todo ha ido bien, el proyecto debería ser accesible desde http://localhost:4200

## Librerías utilizadas

* [@angular/cli](https://www.npmjs.com/package/@angular/cli)
* [bootstrap](https://www.npmjs.com/package/bootstrap)
* [ngx-pagination](https://www.npmjs.com/package/ngx-pagination)
