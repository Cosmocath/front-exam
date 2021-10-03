import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './components/liste-patients/liste-patients.component';
import { ListeInfirmieresComponent } from './components/liste-infirmieres/liste-infirmieres.component';
import {HttpClientModule} from '@angular/common/http';
import { OnePatientComponent } from './components/one-patient/one-patient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OneInfirmiereComponent } from './components/one-infirmiere/one-infirmiere.component';
import { DetailInfirmiereComponent } from './components/detail-infirmiere/detail-infirmiere.component';

/**bootstrap icon */
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  alarm,
  alarmFill,
  alignBottom
};
@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    ListeInfirmieresComponent,
    OnePatientComponent,
    NavbarComponent,
    OneInfirmiereComponent,
    DetailInfirmiereComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
