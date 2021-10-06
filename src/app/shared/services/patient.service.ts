import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${environment.back_url}/patients`);
    }

  getOne(_id:number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${environment.back_url}/patients/`+_id);
  }

  addOne(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${environment.back_url}/patients`, patient);
  }
}
