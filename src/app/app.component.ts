import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';


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
