import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'
import { PainelModule } from './painel/painel.module'
import { ListagemComponent } from './listagem/listagem.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { roteamento } from './app.routes'
import { FotoModule} from './foto/foto.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {FotoService} from '../app/service/foto.service';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FotoModule,
    PainelModule,
    roteamento
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
