import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { OptionsClientComponent } from './options-client/options-client.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavbarComponent,
    CreateClientComponent,
    ViewClientsComponent,
    ManageClientComponent,
    ProductComponent,
    OptionsClientComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
