import { Component } from '@angular/core'
import {Http} from '@angular/http'

@Component({
  selector: 'app-root',
  template: `
 
  <header class="jumbotron" >
    <h1 class="text-center">{{title}} </h1>
  </header>

  <painel class="col-md-2" *ngFor="let foto of listFotos" titulo = "{{foto.titulo}}" >
      <foto  url="{{foto.url}}" titulo="{{foto.titulo}}" ></foto>
  </painel>
 
  `,
  styles: []
})

export class AppComponent {
  title = 'Caelum Pic'

  listFotos: Object[] = []
  
  

  constructor(ajax: Http) {
  
    ajax.get('http://localhost:3000/v1/fotos').subscribe(
    response => 
    
     this.listFotos = response.json()
    ,
    error => error
    
    )
   // {{listFotos}} 
   //arrow function  => subistitui a function e preserva o escopo da class 
     // (response) mais de um parametro  ,response u

  }
}
