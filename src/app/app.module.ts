import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CabeceraComponent} from './components/cabecera/cabecera.component';
import {MainmenuComponent} from './components/mainmenu/mainmenu.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {StudiesskillsComponent} from './components/studiesskills/studiesskills.component';
import {CertificationsComponent} from './components/certifications/certifications.component';

import{ routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MainmenuComponent,
    HomeComponent,
    ErrorComponent,
    ExperienceComponent,
    ProjectsComponent,
    StudiesskillsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
