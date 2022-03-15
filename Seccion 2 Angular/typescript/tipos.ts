//VARIABLES LET Y CONST
//TIPOS DE DATOS
//EXLUIR ARCHIVOS AL TRADUCIR


(function(){  //funcion autoinvocada

function saludar( nombre:string ) {
    console.table( 'Hola, ' + nombre ); // Hola Logan
}

const wolverine = {
    nombre: 'Logan'
};

saludar( wolverine.nombre );

})();

(function(){

    let mensaje = "Hola";
    if (true){
        let mensaje = "Mundo";
    }

    console.log(mensaje);

    
})();

//let scope local
//var scope global



(function(){

    let mensaje = "Hola";
    
    //mensaje = 123 //llora porque espera un string
    mensaje = "123"  //ok

    let numero : number = 123
    let texto: string = "Hola"
    let booleano: boolean = true;
    let hoy: Date = new Date();
    let cualquierCosa: any;
    cualquierCosa= texto;
    cualquierCosa= numero;
    cualquierCosa= booleano;
    cualquierCosa= hoy;

    let spiderman = {
        nombre: "Peter",
        edad: 30 //TS automaticamente detecta los tipos de los atributos
    }

    

    
})();



