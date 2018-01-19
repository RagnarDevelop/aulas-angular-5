import { Component, OnInit } from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import { FotoService } from '../service/foto.service';
import { ActivatedRoute,Router} from '@angular/router'



@Component({
  selector: 'app-cadastro',
  templateUrl : './app-cadastro.component.html'
  
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  message = ""
  roteamento = Router
  
  constructor(private fotoService:FotoService,
              private rotaAtiva : ActivatedRoute) {
  }

    carregarFoto(){
       //console.log(rotaAtiva.snapshot.params.id)
    this.rotaAtiva.params.subscribe(
      parametro =>{ if(parametro.id){
        let result = this.fotoService.consultar(parametro.id)
        .subscribe(
          fotoResponse => this.foto = fotoResponse,
          error => error
        )
        
      }})

    }
   

  salvar(foto:FotoComponent){



   if(foto._id) {

   return  this.alterar(foto)

   } else {

    return this.cadastrar()

   }


    // https://github.com/henrifalves/Js this.conexao.post('http://localhost:3000/v1/fotos',JSON.stringify(this.foto)
    // , {
    //   headers:cabecalho
    // })
    // .subscribe(
    //   () => this.foto = new FotoComponent,
    //   error => console.log(error)
     
    // )

     //eventoSubmit.preventDefault()

  }


  alterar(foto){
    this.fotoService.alterar
    
  }

  cadastrar(){

    this.fotoService.cadastrar(this.foto).subscribe(
      response => {this.foto = new FotoComponent
                   this.message = `Foto ${this.foto.titulo}cadastrada com sucesso`},
      error =>  error
    )
  }

  ngOnInit() {

  this.carregarFoto()
  }

}
