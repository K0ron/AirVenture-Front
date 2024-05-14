import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./Authentification/ui/authentication.component";
import {AuthGuard} from "./Authentification/application/AuthGuard";
import {HomeComponent} from "./Home/ui/home.component";
import {ReservationComponent} from "./Reservation/ui/reservation.component";
import {UserProfilePageComponent} from "./Profile/ui/user-profile-page.component";
import { exitProfilePageGuard } from './Profile/domain/guards/exit-profile-page.guard';
import { UserFormComponent } from './Profile/ui/components/user-form/user-form.component';

export const routes: Routes = [
  { path: "login", component: AuthenticationComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "reservation", component: ReservationComponent, canActivate: [AuthGuard] },
  { path: "profile", canDeactivate: [exitProfilePageGuard], component: UserProfilePageComponent, canActivate: [AuthGuard]/* , children: [
    { path: 'editForm', component: UserFormComponent, outlet: 'formOutlet'}
  ]  */},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
