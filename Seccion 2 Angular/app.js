"use strict";
//TIPADO DEL RETORNO DE UNA FUNCION
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => "Hola";
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve("1");
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase));
})();
