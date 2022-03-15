//ARGUMENTOS OBLIGATORIOS, OPCIONALES Y POR DEFECTO

(function(){  

    function activar(quien: string, 
                     momento?: string,
                     objeto: string = "batiseñal" ) {   //argumentos 1°obligatorios 2°opcionales 3° por defecto

        if (momento){
        console.log(`${ quien } activo la ${objeto} en la ${momento}. `);
    }else{
        console.log(`${ quien } activo la ${objeto}. `);
    }

    }

    activar("Chibi", "algo", "tarde");


})();
