import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public url: string = `${environment.ApiUrl}/api/clients`;

  constructor(public http: HttpClient) {}
  //obtener todos los clientes
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }
  //Obtener un solo cliente
  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  //Crear un cliente
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  //Actualizar
  updateClient(client: Client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  }

  //Borrar
  deleteClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }
}
