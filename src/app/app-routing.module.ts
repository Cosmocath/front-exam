import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPatientComponent } from './components/detail-patient/detail-patient.component';
import { ListeInfirmieresComponent } from './components/liste-infirmieres/liste-infirmieres.component';
import { ListePatientsComponent } from './components/liste-patients/liste-patients.component';

const routes: Routes = [
{path:'patients', component: ListePatientsComponent},
{path:'detail',component:DetailPatientComponent},

{path:'infirmieres', component: ListeInfirmieresComponent},
{path: '**'
, redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
