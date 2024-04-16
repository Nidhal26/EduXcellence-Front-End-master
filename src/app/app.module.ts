import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './Éléments supplémentaires/page-404/page-404.component';
import { PageDErreurDeConnexionComponent } from './Éléments supplémentaires/page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { FooterComponent } from './Accueil/footer/footer.component';
import { MainComponent } from './Accueil/main/main.component';
import { CommonModule } from '@angular/common';
import { ModuleAuthentificationModule } from './Authentification/module-authentification/module-authentification.module';
import { ModuleAdministrateurModule } from './Administrateur/module-administrateur/module-administrateur.module';
import { ModuleFormateurModule } from './Formateur/module-formateur/module-formateur.module';
import { ModuleParticipantModule } from './Participant/module-participant/module-participant.module';
import { PageHelpComponent } from './Éléments supplémentaires/page-help/page-help.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HeaderComponent } from './Accueil/header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    PageDErreurDeConnexionComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PageHelpComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ModuleAuthentificationModule,
    ModuleAdministrateurModule,
    ModuleFormateurModule,
    ModuleParticipantModule,
    MatProgressBarModule,
  
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
