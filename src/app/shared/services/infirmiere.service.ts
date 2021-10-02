import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infirmiere } from '../models/infirmiere';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfirmiereService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Infirmiere[]> {
    return this.httpClient.get<Infirmiere[]>(`${environment.back_url}/infirmieres`);
    }
}
