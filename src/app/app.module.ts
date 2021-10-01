import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './components/liste-patients/liste-patients.component';
import { ListeInfirmieresComponent } from './components/liste-infirmieres/liste-infirmieres.component';
import {HttpClientModule} from '@angular/common/http';
import { OnePatientComponent } from './components/one-patient/one-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    ListeInfirmieresComponent,
    OnePatientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
