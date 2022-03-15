//INTERFACES DE TYPESCRIPT

(()=>{    

   interface Xmen {
      nombre: string;
      edad: number;
      poder?: string; //opcional
   }

   const enviarMision = (xmen: Xmen) => {
      console.log(`Enviando a ${xmen.nombre} a la mision `);
      
   }

   const wolverine: Xmen = {  //obligo al objeto a cumplir el tipado de la interfaz
      nombre: "Logan",
      edad: 60
   }

   enviarMision(wolverine);
   
   
})();
