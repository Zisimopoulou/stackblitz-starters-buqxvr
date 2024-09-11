import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';  // Import the standalone login component
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import the standalone dashboard component
import { AuthGuard } from '../auth.guard';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';  // Import the standalone login component
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';  // Import the standalone login component
import { AdminProductComponent } from './components/admin-product/admin-product.component';  // Import the standalone login component
import { AdminCreateUpdateCategoryComponent } from './components/admin-create-update-category/admin-create-update-category.component';  // Import the standalone login component

const routes: Routes = [
  { path: 'create-category', component: AdminCreateUpdateCategoryComponent },
  { path: 'edit-category/:id', component: AdminCreateUpdateCategoryComponent },
  { path: 'admin-categories', component: AdminCategoriesComponent },
  { path: 'admin-category', component: AdminCategoryComponent },
  { path: 'admin-product', component: AdminProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
