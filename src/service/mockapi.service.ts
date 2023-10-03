import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/models/client';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http : HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`https://demo4529396.mockable.io/clients`);
  }

}
