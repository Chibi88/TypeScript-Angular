import {Component} from "@angular/core"

@Component({

    selector: "app-body",
    templateUrl: "./body.component.html"

})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: "Un gran poder requiere una gran responsabilidad",
        autor: "Ben Parker"
    };


    personajes: string[] = ["Spiderman", "Venom", "Ironman"]

  
}

//aca creo la clase Body component, declaro como template el html que ya hice
//y le digo que el selector se va a llamar app-body

// la exporto  y la voy a llamar desde app.module.ts (si la cree manualmente, sino 
//se importa sola) con el nombre de la clase

// y la voy a llamar desde el app.component.html tambien, con 
// una etiqueta con el nombre del selector  <app-body>