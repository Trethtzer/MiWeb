import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {StudiesskillsComponent} from './components/studiesskills/studiesskills.component';
import {CertificationsComponent} from './components/certifications/certifications.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ProjectGoComponent} from './components/projectGo/projectGo.component';
import {ProjectIndexComponent} from './components/projectIndex/projectIndex.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'studiesskills', component: StudiesskillsComponent},
    {path: 'certifications', component: CertificationsComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'projects/projectGo',component: ProjectGoComponent},
    {path: 'projects/projectIndex',component: ProjectIndexComponent},
    {path: '**', component: ErrorComponent} // ESTA SIEMRPE DEBE SER LA ULTIMA DE TODAS.
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
