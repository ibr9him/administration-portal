import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Client} from './client.model';
import {Observable} from 'rxjs';
import {Page} from '../shared/model/page.model';

@Injectable({
  providedIn: 'root'
})
export class ClientManagementServiceClient {
  private baseURL = environment.base_api_url + '/v1';

  constructor(private http: HttpClient) {
  }

  getClientsPage(page?: number, size?: number, sort?: string, filter?: string): Observable<Page<Client>> {
    return this.http.get<Page<Client>>(`${this.baseURL}/clients?page=${page}&size=${size}&sort=${sort}&q=${filter ? filter : ''}`);
  }

  getClient(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseURL}/clients/${clientId}`);
  }

  saveClient(client: Client) {
    return this.http.post<Client>(`${this.baseURL}/clients/`, client);
  }
}
