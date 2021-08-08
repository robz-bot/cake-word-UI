import { UserListComponent } from './pages/user-list/user-list.component';
import { MastersComponent } from './pages/masters/masters.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'masters', component: MastersComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
