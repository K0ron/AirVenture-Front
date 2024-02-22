import {Component, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    const header = document.getElementById('header')!;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(window.location.pathname === '/login') {
          header.setAttribute("style", "display: none");
        } else {
          header.setAttribute("style", "display: flex");
        }
      }
    });
  }

  openNavigation() {
    const target = document.getElementById('headerNav')!;
    target.classList.add('onOpen');
    const background = document.getElementById('backgroundNavigation')!;
    background.classList.add('darkerBackground');
  }

  closeNavigation() {
    const target = document.getElementById('headerNav')!;
    target.classList.remove('onOpen');
    const background = document.getElementById('backgroundNavigation')!;
    background.classList.remove('darkerBackground');
  }

  onLogout() {
    localStorage.clear();
  }
}
