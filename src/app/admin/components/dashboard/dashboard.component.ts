import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToCategories() {
    this.router.navigate(['/admin/admin-categories']);
  }

  goToProducts() {
    this.router.navigate(['/admin/admin-product']);
  }
}
