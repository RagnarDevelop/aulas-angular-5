import { Component, OnInit } from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import {Http,Headers} from '@angular/http'


@Component({
  selector: 'app-cadastro',
  templateUrl : './app-cadastro.component.html'
  
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  conexao : Http
  
  constructor(ajax:Http) {
    this.conexao = ajax
  }


  salvar(eventoSubmit:Event){

     let cabecalho = new Headers()

     cabecalho.append ('Content-type','application/json ')
    
    this.conexao.post('http://localhost:3000/v1/fotos',JSON.stringify(this.foto)
    , {
      headers:cabecalho
    })
    .subscribe(
      () => this.foto = new FotoComponent,
      error => console.log(error)
     
    )

     //eventoSubmit.preventDefault()

  }

  ngOnInit() {}

}
