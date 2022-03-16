¿Qué son los componentes?

Las aplicaciones en angular estab basadas en multiples componentes. son pequeñas clases 
que cumplen una tarea especifica. 
Por ejemplo el menu de navegacion es un componente, la barra lateral otro, el pie de pagina otro, etc.
Cada componentedebe responder por esa tarea en especifico. 
Los componentes en angular son clases normales con un decorador especifico.

¿Qué son las directivas estructurales?

Son instrucciones que le dicen a la parte del HTML que tiene que hacer. 
*ngIf = "true" mostrar o 
ocultar elementos en HTML por ejemplo. 
*ngFor se encarga de hacer repeticiones de elementos HTML en nuestra pagina. 

Uso de plunker para nuestra primera interacción con Angular.

Plunker es una pagina de bloques de codigos de distintos lenguajes 
stackBlitz es otra

Trabajando de forma local un proyecto en Angular.
Una breve introducción sobre todos los archivos usados en el QuickStart de Angular.
Uso de Bootstrap 4 para nuestros estilos.
Crear archivos .HTML para que se encarguen de la estructura visual de nuestros componentes.
Crearemos una aplicación con 3 componentes re-utilizables.
*ngFor y el *ngIf


PASOS: 

Ya tenemos en AngularCLI instalado

(Sino, npm install -g @angular/cli)

Abrimos la consola, vamos a la carpeta creada para el proyecto y ejecutamos:

ng new my-app (se van a instalar todos los paquetes desde un repositorio de github)

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

Si le vamos a cambiar el nombre a la carpeta no lleva espacios ni caracteres especiales

ejecutamos en la consola "ng serve" y lo monta en el localost

vamos a http://localhost:4200/

----------------------------------------------------

ESTRUCTURA DEL PROYECTO 

Carpeta End to end: e2e -> es para correr las pruebas automaticas

node_modules -> modulos que se instalan con el fin de desarrollo, no se sube al repositorio 
si la borramos, pasamos el arcivo sin eso, el que se lo baja corre npm install y listo, 
recupera los modulos necesarios de node para funcionar 

src -> donde esta la aplicaciones. aca es donde vamos a pasar todo el tiempo

APP -> app.component es el primer componente definido que tenemos. del archivo index.html, llamamos al 
componente mediante <app-root> y con eso le decimos a esa pagina todo lo que tiene que hacer. sino 
seria un html plano.
ahora, de ese componente hay muchos archivos, uno de ts (logica), uno de css (estilos), 
uno de html (codigo HTML del componente) y uno .spec, que se usa para pruebas automaticas 
y app.mopdule.ts tiene el @NgModule, decorador

ASSETS -> recursos estaticos, imagenes y etc

editorconfig -> son configuraciones del editor, no se toca 

gitignore -> le dice a git que no suba eso 

angular.json -> le dice a angular como es nuestra aplicacon y como funciona 
assets, styles y scripts es lo unico que modificamos. le dice que unifique todos los 
assets, estilos y scripts.

package-lock.json -> no se toca 

package.json -> no se toca casi nada. se crea de forma automatica. 
es casi como un pom, estan las dependencias

REAME.md -> se renderiza y tiene instrucciones de como correrlo, 
se puede borrar tranquilamente que no afecta, pero sirve (markdown, como html pero mas ligero)

tsconfig.json -> configuraciones de ts

tslint.json -> como el sonar, codigo mas limpio

----------------------------

COMO CREAR COMPONENTES CON ANGULAR cli

ejecutar en la terminal 
ng g c components/footer

crea la carpeta, los archivos y lo importa directamente en app.module.ts


----------------------------

#Cuestionario seccion 3

1- ¿Que son las directivas estructurales? 

Son instrucciones que agregan, eliminan, repiten o reemplazan elementos HTML 
en el template

--

2- ¿Qué es el siguiente código?

import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
  }
 
}

Es un componente

--

3) Dado el siguiente componente, ¿Cómo podemos insertarlo en otro template?

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-heroes-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
 
}


<app-heroes-about> </app-heroes-about>

--

4) ¿Cuál de las siguientes directivas permiten repetir un bloque de código HTML?

*ngFor

--

5) ¿Para qué se utiliza la siguiente instrucción?

import { Component } from '@angular/core'; 

Sirve para importar el componente que se utiliza como decorador para que las clases de TypeScript se conviertan en componentes. 

--

6) En un componente, ¿Qué hace la siguiente instrucción?

selector: 'app-about'

Nos permite definir el nombre con el cual podremos usar el componente en el HTML

--

7) ¿Cuál sería el mejor nombre para el nombre de la clase del siguiente componente ?

"lista-compras"

export class ListaComprasComponent  --> mayusculas iniciales y la palabra component

--

8) ¿Cuál sería el mejor nombre del archivo del siguiente componente?

export class SobrePaginaComponent 

sobre-pagina.component.ts   --> guion para separar en el nombre .component y todo en minusculas

--

9) ¿Qué error tiene el siguiente código?

import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-about',
  template: './about.component.html'
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}


El template no es valido, para utilizar un archivo hay que usar templateUrl

--

10) ¿Qué beneficios tenemos al usar componentes?

Nos permiten la reutilizacion del codigo 
Nos ayudan a segmentar nuestro codigo en archivos mas pequeños que son mas faciles de mantener. 
Nos ayudan a generar rapidamente paginas o secciones de nuestra aplicacion. 

