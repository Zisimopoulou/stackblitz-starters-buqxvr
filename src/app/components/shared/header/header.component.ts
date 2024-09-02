import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf directly

@Component({
  selector: 'app-header',
  standalone: true, // Ensure the component is standalone if using this approach
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false; // State to track the menu visibility

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu visibility
  }
}
