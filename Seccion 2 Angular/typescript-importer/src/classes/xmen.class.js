"use strict";
//IMPORTACION DE MODULOS
//DECORADORES DE CLASES
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xmen = void 0;
//es una funcion que se ejecuta en una clase
//creamos una funcion de ejemplo para añadirsela a la clase Xmen como un decorador
//pero nosotros no vamos a crear nuestras propias funciones, vamos a utilizar las de Angular 
//para añadirle funcionalidades a las clases. Es como las anotaciones de Springboot
function imprimirConsola(constructorClase) {
    console.log(constructorClase);
}
;
let Xmen = class Xmen {
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
};
Xmen = __decorate([
    imprimirConsola //un decorador añade funcionalidades a una clase.
], Xmen);
exports.Xmen = Xmen;
;
