import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
})
export class ViewClientsComponent implements OnInit {
  // render de los clientes
  clients!: Client[];
  //importacion del servicio
  constructor(public _clientService: ClientService, private _router: Router) {}
  ngOnInit(): void {
    this._clientService.getClients().subscribe((res) => (this.clients = res));
    // this.clientService.getClients().subscribe((res) => console.log(res));
  }

  viewClient(idx: number) {
    this._router.navigate(['/manage-client', idx]);
  }
}
