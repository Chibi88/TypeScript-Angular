//DESESTRUCTURACION DE OBJETOS Y ARREGLOS

(()=>{    //ya es una arrow la autoinvocada 

    //acceder a un objeto

     const avengers = {

            nombre: "Steve",
            clave: "Capitan America",
            poder: "Fuerza"
     }

     console.log(avengers.nombre);
     console.log(avengers.clave);
     console.log(avengers.poder);  

     //desestructuracion objeto:
     //para no repetir avenger.cada atributo podemos hacer:

     const {nombre, clave, poder} = avengers; //no importa el orden

     console.log(nombre);
     console.log(clave);
     console.log(poder); 

     //esto tmb funciona en los atributos de una funcion

     const extraer = ( avengers:any) =>{

        const {nombre, poder} = avengers; //no importa el orden

     console.log(nombre);
     console.log(poder);

     }

     extraer(avengers);

     //misma funcion con datos en los parametros. desestructuracion de datos como argumento

     const extraer2 = ({nombre, poder}:any) =>{

     console.log(nombre);
     console.log(poder);
     }

     extraer2(avengers);


     //Arreglos

     const avenger2: string[]= ["Thor", "Ironman", "Spiderman"];

     console.log(avenger2[0]);
     console.log(avenger2[1]);
     console.log(avenger2[2]);
    
     //desestructuracion de arreglos

     const [ Dios, Tony, Araña ] = avenger2; //puedo acceder a los datos asignando variables nuevas
     

     console.log( Dios );
     console.log( Tony );
     console.log( Araña );

     //puedo extraer solo algunos datos 

     const [ , , Araña2 ] = avenger2; //puedo acceder a los datos asignando variables nuevas
     
     console.log( Araña2 );

     // funcion sin desestructurar

     const extraerArr = ( avenger2: string[] ) =>{

      console.log(avenger2[0]);
      console.log(avenger2[1]);
      console.log(avenger2[2]);
      }
 
      extraerArr(avenger2);

      //funcion desestructurada

      const extraerArr2 = ( [thor, ironman, spiderman]: string[] ) =>{

         console.log(thor);
         console.log(ironman);
         console.log(spiderman);
         }
    
         extraerArr2(avenger2);





     

})();
