import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';
@Component({
  selector: 'app-options-client',
  templateUrl: './options-client.component.html',
  styleUrls: ['./options-client.component.scss'],
})
export class OptionsClientComponent implements OnInit {
  title: string = 'Gestionar Cliente';
  load: Client = new Client();

  constructor(
    private _activateRoute: ActivatedRoute,
    private _clientService: ClientService,
    private _toastrSvc: ToastrService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this._activateRoute.params.subscribe((e) => {
      let id = e['id'];
      if (id) {
        this._clientService.getClient(id).subscribe((res) => (this.load = res));
      }
    });
  }

  updateClient(forma: NgForm): void {
    this._clientService.updateClient(this.load).subscribe((res) => {
      this._router.navigate(['/manage-client', this.load.id]);
      this._toastrSvc.success(`Actualizacion Exitosa`);
    });
  }

  deleteClient(client: Client): void {
    this._clientService.deleteClient(client.id).subscribe((res) => {
      this._router.navigate(['view-clients']);
      this._toastrSvc.error(`Borrado Exitosamente`);
    });
  }
}
