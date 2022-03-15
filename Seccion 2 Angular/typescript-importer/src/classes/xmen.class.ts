//IMPORTACION DE MODULOS
//DECORADORES DE CLASES

//es una funcion que se ejecuta en una clase
//creamos una funcion de ejemplo para añadirsela a la clase Xmen como un decorador
//pero nosotros no vamos a crear nuestras propias funciones, vamos a utilizar las de Angular 
//para añadirle funcionalidades a las clases. Es como las anotaciones de Springboot


function imprimirConsola(constructorClase: Function){
    
    console.log(constructorClase);
    
};

@imprimirConsola  //un decorador añade funcionalidades a una clase.
export class Xmen {

    constructor(
        public nombre: string,
        public clave: string
    ){}

    imprimir(){
        console.log(`${this.nombre} - ${this.clave}`);
        
    }

};
