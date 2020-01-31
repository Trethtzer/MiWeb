import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {StudiesskillsComponent} from './components/studiesskills/studiesskills.component';
import {CertificationsComponent} from './components/certifications/certifications.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'studiesskills', component: StudiesskillsComponent},
    {path: 'certifications', component: CertificationsComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: '**', component: ErrorComponent} // ESTA SIEMRPE DEBE SER LA ULTIMA DE TODAS.
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
