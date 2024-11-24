import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ecrivain } from '../../model/ecrivain.model';

@Injectable({
  providedIn: 'root'
})
export class EcrivainService {
  private apiURL = 'http://localhost:8080/ecrivains/api/all';

  constructor(private http: HttpClient) {}

  listeEcrivains(): Observable<Ecrivain[]> {
    return this.http.get<Ecrivain[]>(this.apiURL);
  }
}
