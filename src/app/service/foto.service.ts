import {Http,Headers,Response} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { FotoComponent } from '../foto/foto.component';
import { Injectable } from '@angular/core';


@Injectable()
export class FotoService{
    cabecalho =  new Headers()
     url = 'http://localhost:3000/v1/fotos'
    
     constructor(private ajax : Http){

      this.cabecalho.append ('Content-type','application/json ')

     }

    listar(): Observable<any> {
    return this.ajax.get(this.url)
     .map(
        response => response.json()
         )
    }


    cadastrar(foto : FotoComponent): Observable<Response>{
    
    return this.ajax.post(this.url,JSON.stringify(foto),
     {headers : this.cabecalho }
     )

    }

    deletar (foto:FotoComponent) : Observable<Response>{
     return this.ajax.delete(`${this.url}/${foto._id}`)
    }

    alterar(foto : FotoComponent){
     this.ajax.put(`${this.url}/${foto._id}`,JSON.stringify(foto))
    }

    consultar(id:String): Observable<FotoComponent>{
      return this.ajax.get(`${this.url}/${id}`).map(
        response => response.json()
         )
    }
}