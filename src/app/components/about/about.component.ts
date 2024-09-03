import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterLink, FooterComponent, HeaderComponent], // Import the FooterComponent here
})
export class AboutComponent implements AfterViewInit {
  private textOverlay!: HTMLElement; // Non-null assertion

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.textOverlay = this.elRef.nativeElement.querySelector('.text-overlay');
    this.adjustFontSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustFontSize();
  }

  private adjustFontSize(): void {
    if (!this.textOverlay) return;

    // Function to calculate font size
    const calculateFontSize = (): number => {
      const container = this.textOverlay;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Calculate font size based on container height and width
      // Start with a reasonable base size and adjust based on container dimensions
      let fontSize = Math.min(containerWidth, containerHeight) * 0.06; // Example base size calculation

      // Adjust if the text overflows
      container.style.fontSize = `${fontSize}px`;

      // Loop to find the maximum font size that fits within the container
      while (container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth) {
        fontSize -= 1; // Decrement font size
        container.style.fontSize = `${fontSize}px`;
      }

      return fontSize;
    };

    // Adjust the font size
    calculateFontSize();
  }
}
