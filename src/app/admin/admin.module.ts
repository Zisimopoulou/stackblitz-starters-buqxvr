import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import the standalone dashboard component

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DashboardComponent  // Import standalone component
  ]
})
export class AdminModule { }
