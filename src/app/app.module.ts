import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CabeceraComponent} from './components/cabecera/cabecera.component';
import {MainmenuComponent} from './components/mainmenu/mainmenu.component';
import {MainmenumovilComponent} from './components/mainmenumovil/mainmenumovil.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {StudiesskillsComponent} from './components/studiesskills/studiesskills.component';
import {CertificationsComponent} from './components/certifications/certifications.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ProjectGoComponent} from './components/projectGo/projectGo.component';
import {ProjectIndexComponent} from './components/projectIndex/projectIndex.component';
import {ResponsiveService} from './utils/responsive.service';

import{ routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MainmenuComponent,
    MainmenumovilComponent,
    HomeComponent,
    ErrorComponent,
    ExperienceComponent,
    ProjectsComponent,
    StudiesskillsComponent,
    CertificationsComponent,
    HobbiesComponent,
    ProjectGoComponent,
    ProjectIndexComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders, ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
