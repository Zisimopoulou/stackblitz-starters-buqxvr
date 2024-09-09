import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';  // Import the standalone login component
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import the standalone dashboard component
import { AuthGuard } from '../auth.guard';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';  // Import the standalone login component
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';  // Import the standalone login component
import { AdminProductComponent } from './components/admin-product/admin-product.component';  // Import the standalone login component

const routes: Routes = [
  { path: 'admin-categories', component: AdminCategoriesComponent },  // Route for login
  { path: 'admin-category', component: AdminCategoryComponent },  // Route for login
  { path: 'admin-product', component: AdminProductComponent },  // Route for login
  { path: 'login', component: LoginComponent },  // Route for login
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protected route
  { path: '', redirectTo: 'login', pathMatch: 'full' }  // Default route for admin module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
