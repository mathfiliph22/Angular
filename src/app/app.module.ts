import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './Views/contatos/contatos.component';
import { JogadorComponent } from './Views/jogador/jogador.component';
import { HomeComponent } from './Views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    JogadorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
