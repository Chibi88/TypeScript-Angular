//Examen practico 

(()=>{

  // Uso de Let y Const
  const nombre: string = 'Ricardo Tapia';
  var edad: number = 23;

  const personaje = {
    nombre,
    edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  
  interface Superheroe {
    nombre: string;
    artesMarciales: string[];
  }
  
  const batman:Superheroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  function resultadoDoble( a:number, b:number ){
    return (a + b) * 2
  }

  const resultadoDobleArrow = (a:number, b:number) => (a + b) *2;
 

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  (()=>{ 
    function getAvenger( nombre:string, 
                       poder?: string, 
                       arma: string= "arco" ){
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
      
    console.log(mensaje);
  
  };

    getAvenger("Sil", "algo");
})();

  

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {

    base:number;
    altura:number;

    constructor(base:number, altura:number){
      this.base = base;
      this.altura = altura;
    }

    //calcularArea(base:number, altura:number):number{
    //  return base * altura;
    // }

    calcularArea = () :number => this.base * this.altura;  //en arrow, mas corta
    

  }



})();



//Examen teorico

// Todo el codigo de JS es compatible con TS - Verdadero

// Que es el archivo tsconfig.json?  El archivo de configuracion del compilador de TS

// Que tipos de datos puuede almacenar una variable del siguiente tipo?
// let demo: any [];
// un arreglo de cualquier cosa 

// Como se puede inicializar una variable de tipo texto en TS?
// let texto = "hola mundo"   (Con comillas simples, dobles o inversas)

// Con que caracter se define que la propiedad de un objeto es opcional?
// ?

// El valor de una constante se debe definir al momento de ser creada - Verdadero

// El siguien codigo es valido? const constante = "Este texto no puede cambiar"
// Si, pero por convencion las constantes van en MAYUSCULAS

// Cual es la principal ventaja de las funciones de flecha?
// No modifica el objeto this al ser ejecutada

// Que es un constructor en una clase?
// Una funcion que se ejecuta cuando la clase es instanciada

// Que valor tendra la variable de "thor"?
// let avengers = ["Thor", "Ironman", "Capitan America", "Hulk"];
// let [, , thor] 

//"Capitan America"
