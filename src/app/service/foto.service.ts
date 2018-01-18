import {Http,Headers,Response} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { FotoComponent } from '../foto/foto.component';



export class FotoService{
    cabecalho =  new Headers()
     url = 'http://localhost:3000/v1/fotos'
    
     constructor(private ajax : Http){

      this.cabecalho.append ('Content-type','application/json ')

     }

    listar(): Observable<any> {
    return this.ajax.get(this.url)
     .map(
        response => {
            response.json()
         })
    }


    cadastrar(foto : FotoComponent): Observable<Response>{
    
    return this.ajax.post(this.url,JSON.stringify(foto),
     {headers : this.cabecalho }
     )
    
    
    }

    deletar (){
     this.ajax
    }

    alterar(){
     this.ajax
    }

    consultar(){
     this.ajax
    }

}