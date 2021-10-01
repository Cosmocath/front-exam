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
    return this.httpClient.get<Patient[]>(`http://localhost:8080/patients`);
    }

  getTest(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/patients/test`);

  }
    


}
