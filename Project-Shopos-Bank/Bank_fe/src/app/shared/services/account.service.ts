import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client.model';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnInit {
  client: Client = new Client();

  constructor(
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
}
