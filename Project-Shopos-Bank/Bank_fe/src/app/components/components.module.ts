import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    CreateClientComponent,
    ViewClientsComponent,
    ManageClientComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
