import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./Authentification/ui/authentication.component";
import {AuthGuard} from "./Authentification/application/AuthGuard";
import {HomeComponent} from "./Home/ui/home.component";
import {ReservationComponent} from "./Reservation/ui/reservation.component";

export const routes: Routes = [
  { path: "login", component: AuthenticationComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "reservation", component: ReservationComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
