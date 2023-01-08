import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { Account, Client } from '../models/client.model';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnInit {
  public url: string = `${environment.ApiUrl}/api/accounts`;
  client: Client = new Client();

  constructor(
    public http: HttpClient,
    private _activateRoute: ActivatedRoute,
    private _clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this._activateRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this._clientService
          .getClient(id)
          .subscribe((res) => (this.client = res));
      }
    });
  }

  //Crear una cuenta a un cliente
  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.url, account);
  }
}
