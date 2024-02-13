import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserProfilePageComponent } from './user-profile/pages/user-profile-page/user-profile-page.component';
import { UserFormComponent } from './user-profile/components/user-form/user-form.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UserFormComponent, UserProfilePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AirVentureFront';
}
