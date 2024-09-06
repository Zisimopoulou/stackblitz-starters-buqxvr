import { Component, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [RouterLink, FooterComponent, HeaderComponent],
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Run when the component's view has been fully initialized
  ngAfterViewInit() {
    this.adjustLayout();
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustLayout();
  }

  // Adjust the layout based on the viewport size
  adjustLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const mapContainer = this.el.nativeElement.querySelector('.map-container');
    const contactDetails = this.el.nativeElement.querySelector('.contact-details');

    // Adjust map container margin based on screen height
    if (screenHeight <= 600) {
      this.renderer.setStyle(mapContainer, 'margin-top', '5vh');
    } else {
      this.renderer.setStyle(mapContainer, 'margin-top', '10vh');
    }

    // Adjust contact details width based on screen width
    if (screenWidth < 768) {
      this.renderer.setStyle(contactDetails, 'width', '90%');
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      this.renderer.setStyle(contactDetails, 'width', '80%');
    } else {
      this.renderer.setStyle(contactDetails, 'width', '60%');
    }

    // Ensure the background image covers the entire viewport
    const contactPage = this.el.nativeElement.querySelector('.contact-page');
    this.renderer.setStyle(contactPage, 'height', `${screenHeight}px`);
  }
}
