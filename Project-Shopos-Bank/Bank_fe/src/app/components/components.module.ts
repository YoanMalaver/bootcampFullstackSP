import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageClientComponent } from './manage-client/manage-client.component';

@NgModule({
  declarations: [NavbarComponent, CreateClientComponent, ViewClientsComponent, ManageClientComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
