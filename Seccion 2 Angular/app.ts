//TIPADO DEL RETORNO DE UNA FUNCION

(()=>{    


    const sumar = (a: number, b:number):number =>  a + b;

    const nombre = ():string =>  "Hola";

    const obtenerSalario = (): Promise<string> => {

        return new Promise ((resolve, reject) => {
            resolve("1");

        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase))

  
})();
