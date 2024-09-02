import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  templateUrl: './home.component.html', // Point to the external HTML file
  styleUrls: ['./home.component.scss'], // Link to SCSS file
  imports: [RouterLink, FooterComponent, HeaderComponent], // Import the FooterComponent here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this schema
})
export class HomeComponent {}
