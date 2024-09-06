import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';  // Import the standalone login component
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import the standalone dashboard component
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Route for login
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protected route
  { path: '', redirectTo: 'login', pathMatch: 'full' }  // Default route for admin module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
