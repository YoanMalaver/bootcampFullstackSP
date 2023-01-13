import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ManageClientComponent } from './components/manage-client/manage-client.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'view-clients', component: ViewClientsComponent },
  { path: 'manage-client/:id', component: ManageClientComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
