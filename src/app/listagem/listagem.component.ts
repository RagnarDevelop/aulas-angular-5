import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-listagem',
  templateUrl: 'app-listagem.component.html'
})

export class ListagemComponent implements OnInit{
 
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

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}

