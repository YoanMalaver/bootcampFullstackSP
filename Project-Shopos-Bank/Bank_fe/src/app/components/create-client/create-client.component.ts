import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent {
  title: string = 'Registro Clientes';
  newClient: Client = new Client();
  constructor(private _clientService: ClientService, private _router: Router) {}

  addClient(): void {
    this._clientService.createClient(this.newClient).subscribe((res) => {
      this._router.navigate(['view-clients']);
    });
  }
}
