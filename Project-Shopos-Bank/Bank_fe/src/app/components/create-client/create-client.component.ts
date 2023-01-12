import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private _toastrSvc: ToastrService
  ) {}

  ageCalculator() {
    if (this.newClient.dateOfBirth) {
      const covertAge = new Date(this.newClient.dateOfBirth);
      const timeDiff = Math.abs(Date.now() - covertAge.getTime());
      this.edad = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    }
  }

  addClient(forma: NgForm): void {
    console.log(forma.value);
    this.ageCalculator();
    if (this.edad >= 18 && forma.valid == true) {
      this._clientService.createClient(this.newClient).subscribe((res) => {
        this._router.navigate(['view-clients']);
        this._toastrSvc.success(`Usuario Creado Correctamente`);
      });
    } else if (this.edad < 18) {
      this._toastrSvc.error(
        `Error la edad debe ser mayor a 18 años, la edad actual es: ${this.edad}`
      );
    } else if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }
  }
}
