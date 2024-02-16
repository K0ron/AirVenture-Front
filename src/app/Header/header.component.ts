import {Component, ElementRef, Renderer2} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    const header = this.elementRef.nativeElement.querySelector('#header');

    if(window.location.pathname === '/login') {
      this.renderer.setStyle(header, 'display', 'none');
    } else {
      this.renderer.setStyle(header, 'display', 'block');
    }
  }
}
