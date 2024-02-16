import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import {AuthenticationComponent} from "./Authentification/ui/authentication.component";
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from "./Home/ui/home.component";
import {ReservationComponent} from "./Reservation/ui/reservation.component";
import {UserProfilePageComponent} from "./Profile/ui/user-profile-page.component";
import {UserFormComponent} from "./Profile/components/user-form/user-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthenticationComponent, HomeComponent, HeaderComponent, ReservationComponent, UserProfilePageComponent, UserFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AirVentureFront';
}
