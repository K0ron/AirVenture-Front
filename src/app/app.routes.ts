import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./Authentification/ui/authentication.component";
import {AuthGuard} from "./Authentification/application/AuthGuard";
import {HomeComponent} from "./Home/ui/home.component";
import {ReservationComponent} from "./Reservation/ui/reservation.component";
import {UserProfilePageComponent} from "./Profile/ui/user-profile-page.component";
import {ActivityComponent} from "./Activity/ui/activity.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";

export const routes: Routes = [
  { path: "login", component: AuthenticationComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "reservation/:id", component: ReservationComponent, canActivate: [AuthGuard] },
  { path: "profile", component: UserProfilePageComponent, canActivate: [AuthGuard] },
  { path: "activity", component: ActivityComponent, canActivate: [AuthGuard] },
  { path: "faq", component: FaqPageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
