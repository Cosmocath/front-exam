import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailInfirmiereComponent } from './components/detail-infirmiere/detail-infirmiere.component';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';
import { ListeInfirmieresComponent } from './components/liste-infirmieres/liste-infirmieres.component';
import { ListePatientsComponent } from './components/liste-patients/liste-patients.component';

const routes: Routes = [

{path:'patients', component: ListePatientsComponent},
{path: 'patient/:id/details', component:DetailPatientComponent, pathMatch: 'full'},

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
