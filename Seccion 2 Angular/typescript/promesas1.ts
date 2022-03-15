//PROMESAS 

//como ejecutar un codigo sin bloquear el codigo de mi programa

(()=>{    

   console.log("inicio");

   const prom1 = new Promise(( resolve, reject ) =>{

   setTimeout(()=>{
      //resolve("Se terminó el timeout")  se ejecuta inicio y fin, y cuando termina la promesa, trae el mensaje
      reject("Se termino el timeout");
   }, 1000);

   });

   prom1
      .then(mensaje => console.log(mensaje))
      .catch(err => console.warn(err));
      
   
   console.log("fin");
   
       

})();
