//ARROW FUNCTIONS

(function(){  

    const miFuncion = function(a:string){  //funcion asignada a una variable
        return a.toUpperCase();
    } //beneficio: si yo la asigno a una constante no la puedo sobreescribir

    function miFuncion2(a:string){    //funcion tradicional
        return a;
    }

    const miFuncion3 = (a:string) => {    //arrow function 
        return a;
    } 

    const miFuncionArrow = (a:string) => a.toUpperCase();    //si tiene 1 linea de codigo me ahorro las llaves y el return
       
    console.log(miFuncion('Normal'));
    console.log(miFuncionArrow("Arrow"));

    //EJERCICIO

    const sumarN = function(a:number, b:number){
        return a + b;  //convertirla en arrow
    }

    const sumarArrow = (a:number, b:number) => a + b;
    
    console.log(sumarN(2, 2));
    console.log(sumarArrow(2, 2));

    //EJERCICIO HULK

    // const hulk = {
    //     nombre: "Hulk",
    //     smash(){
    //         console.log(`${this.nombre} smash!`);
    // }
    // }

    // const hulk = {
    //     nombre: "Hulk",
    //     smash(){
    //         setTimeout(function(){
    //         console.log(`${this.nombre} smash!`);
    //        },1000);
    //   }}                               CON FUNCION COMUN EL THIS ES ANY 
    //                                    PORQUE EL SCOPE DE LA FUNCION ES LOCAL


    const hulk = {
        nombre: "Hulk",
        smash(){

            setTimeout( () => {
            console.log(`${this.nombre} smash!`);
            },1000);    //CON => EL THIS APUNTA A HULK. NO MODIFICA A LO QUE APUNTA THIS
      }
    }

    hulk.smash();

})();
