import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Ensure the component is standalone if using this approach
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink, RouterModule]
})
export class HeaderComponent {
  menuOpen = false; // State to track the menu visibility
}