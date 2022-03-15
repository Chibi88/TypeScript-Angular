//TEMPLATE LITERALES

(function(){  

    function getEdad(){
        return 1 + 30 + 2; 
    }

    const nombre = "Silvina";
    const apellido = "Colonia";
    const edad = 33;
    
    //const salida = nombre + " " + apellido + " (" + edad + ") "  ;

    //template literales      (backticks)  ``   (backslash)  \
    const salida = `
${ nombre } ${ apellido } 
    \n  ${ getEdad()} ` ;

    console.log(salida);
    

})();
