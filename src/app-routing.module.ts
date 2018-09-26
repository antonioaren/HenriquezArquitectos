import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent} from './app/intro/intro.component'

import {HenriquezArquitectosComponent} from './app/henriquez-arquitectos/henriquez-arquitectos.component'
import {HenriquezArquitectosTrabajosComponent} from './app/henriquez-arquitectos-trabajos/henriquez-arquitectos-trabajos.component'
import {HenriquezArquitectosContactoComponent} from './app/henriquez-arquitectos-contacto/henriquez-arquitectos-contacto.component'




import {GabrielHenriquezComponent} from './app/gabriel-henriquez/gabriel-henriquez.component'

import {JorgeHenriquezComponent} from './app/jorge-henriquez/jorge-henriquez.component'

const routes: Routes = [
  { path:'', component: IntroComponent},
  { 
    path:'henriquez-arquitectos', 
    component: HenriquezArquitectosComponent,
    children: [
      {path:'trabajos', component: HenriquezArquitectosTrabajosComponent},
      {path:'contacto', component: HenriquezArquitectosContactoComponent}
    ]
  },
  { path:'gabriel-henriquez', component: GabrielHenriquezComponent},
  { path:'jorge-henriquez', component: JorgeHenriquezComponent},

];
@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { 
  
}
