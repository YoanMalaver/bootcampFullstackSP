import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { OptionsClientComponent } from './options-client/options-client.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CreateClientComponent,
    ViewClientsComponent,
    ManageClientComponent,
    ProductComponent,
    OptionsClientComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
