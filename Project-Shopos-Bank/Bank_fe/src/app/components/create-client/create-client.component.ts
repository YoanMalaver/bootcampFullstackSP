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
  edad!: number;
  constructor(private _clientService: ClientService, private _router: Router) {}

  ageCalculator() {
    if (this.newClient.dateOfBirth) {
      const covertAge = new Date(this.newClient.dateOfBirth);
      const timeDiff = Math.abs(Date.now() - covertAge.getTime());
      this.edad = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
  }
  addClient(): void {
    this.ageCalculator();
    console.log(this.edad);
    if (this.edad >= 18) {
      this._clientService.createClient(this.newClient).subscribe((res) => {
        this._router.navigate(['view-clients']);
      });
    }
  }
}
