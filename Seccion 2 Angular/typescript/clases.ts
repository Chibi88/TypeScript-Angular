//CLASES EN TYPESCRIPT Y SUS CONSTRUCTORES

(()=>{    

   class Avenger {

      nombre: string;
      equipo: string;
      nombreReal: string; 
      puedePelear: boolean;
      peleasGanadas?: number

      constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean){
         this.nombre = nombre;
         this.equipo = equipo;
         this.nombreReal = nombreReal;
         this.puedePelear = puedePelear
      }

   }      //esto esta bien, pero declara cada propiedad e inicializar cada atributo 
         //en el constructor puede ser larguisimo

   const antman = new Avenger("Antman", "Capi", "Scott", true);

   console.log(antman);


   //se puede directamente declaras las propiedades en el constructor

   class Avenger2 {

      

      constructor( public nombre: string,
                   public equipo: string,
                   public nombreReal?: string,
                   public puedePelear: boolean = true,
                   public peleasGanadas: number = 0 ){}

   }      //esto esta bien, pero declara cada propiedad e inicializar cada atributo 
         //en el constructor puede ser larguisimo

   const antman2 = new Avenger2("Antman", "Capi");

   console.log(antman2);
   


  
})();
