import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss'],
})
export class ManageClientComponent implements OnInit {
  title: string = 'Gestionar Cliente';
  load: Client = new Client();

  constructor(
    private _activateRoute: ActivatedRoute,
    private _clientService: ClientService,
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

  updateClient(): void {
    this._clientService.updateClient(this.load).subscribe((res) => {
      this._router.navigate(['view-clients']);
    });
  }
}
