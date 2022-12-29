import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss'],
})
export class ManageClientComponent {
  // client: any = {};

  constructor(
    private _activateRoute: ActivatedRoute,
    private _clientService: ClientService
  ) {}
}
