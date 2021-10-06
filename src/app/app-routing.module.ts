import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DetailInfirmiereComponent } from './components/detail-infirmiere/detail-infirmiere.component';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';
import { ListeInfirmieresComponent } from './components/liste-infirmieres/liste-infirmieres.component';
import { ListePatientsComponent } from './components/liste-patients/liste-patients.component';

const routes: Routes = [
  { path: '', redirectTo:'patients', pathMatch: 'full' },
{path:'patients', component: ListePatientsComponent,pathMatch: 'full'},
{path:'patients/liste', component: ListePatientsComponent,pathMatch: 'full'},
{path: 'patient/:id/details', component:DetailPatientComponent, pathMatch: 'full'},
{path: 'patient/add', component:AddPatientComponent, pathMatch: 'full'},

{path:'infirmieres', component: ListeInfirmieresComponent},
{path: 'infirmiere/:id/details', component:DetailInfirmiereComponent, pathMatch: 'full'},
{path: '**'
, redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
