import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import { FotoComponent } from '../foto/foto.component';
import {FotoService} from '../service/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: 'app-listagem.component.html'
})

export class ListagemComponent implements OnInit{
 
  title = 'Caelum Pic'
  message = ''

  listFotos: FotoComponent[] = []

  constructor( private service: FotoService) {
    service.listar()
           .subscribe(
             listJson=> { this.listFotos = listJson},
             error => console.log(error)
           )

  }


  excluir(foto:FotoComponent){
     this.service.deletar(foto).subscribe(
       ()=> {
      this.listFotos = this.listFotos.filter(fotoFilter => fotoFilter != foto) 
      this.message = 'deletada com sucesso'
      setTimeout(()=>{
        this.message = ''
      },5000)
     
      },
       () => this.message = 'deu zica'
     )
    
    
  }


    
  
    // constructor(ajax: Http) {ajax.get('http://localhost:3000/v1/fotos').subscribe(
    // response => 
    
    //  this.listFotos = response.json()
    // ,
    // error => error
    
    // )
   // {{listFotos}} 
   //arrow function  => subistitui a function e preserva o escopo da class 
     // (response) mais de um parametro  ,response u

  ngOnInit() {
   
  }
}

