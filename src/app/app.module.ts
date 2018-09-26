import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { HenriquezArquitectosComponent } from './henriquez-arquitectos/henriquez-arquitectos.component';
import { JorgeHenriquezComponent } from './jorge-henriquez/jorge-henriquez.component';
import { GabrielHenriquezComponent } from './gabriel-henriquez/gabriel-henriquez.component';
import { HenriquezArquitectosTrabajosComponent } from './henriquez-arquitectos-trabajos/henriquez-arquitectos-trabajos.component';
import { HenriquezArquitectosContactoComponent } from './henriquez-arquitectos-contacto/henriquez-arquitectos-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HenriquezArquitectosComponent,
    JorgeHenriquezComponent,
    GabrielHenriquezComponent,
    HenriquezArquitectosTrabajosComponent,
    HenriquezArquitectosContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
