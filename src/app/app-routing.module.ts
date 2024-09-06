import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './admin/components/login/login.component';  // Add the login component

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Login route
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', component: HomeComponent }, // Default route (homepage)
  { path: 'about', component: AboutComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'category/:id', component: CategoryComponent }, // Dynamic routing for categories
  { path: 'product/:id', component: ProductComponent }, // Dynamic routing for products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
