import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Views/contatos/contatos.component';
import { HomeComponent } from './Views/home/home.component';

const routes: Routes = [
    
    {path: "contatos" , component: ContatosComponent}
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
