import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { GalleriaModule } from 'primeng/galleria';
import { MapComponent } from './components/map/map.component';
import { ButtonModule } from 'primeng/button';
import { Activity } from '../domain/model/Activity';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Reservation } from '../domain/model/Reservation';
import { ReservationService } from '../domain/services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    GalleriaModule,
    MapComponent,
    ButtonModule,
    DialogModule,
    CarouselModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  reservation!: Reservation;

  reservationDate: Date = new Date();
  numberOfParticipants: number = 0;
  reservationPrice: number = 0;

  reservationForm!: FormGroup;

  activity: Activity = {
    id: '',
    name: '',
    description: '',
    photo: [],
    price: 0,
  };

  // Récupération Date selectionnée

  selectedDate: Date = new Date();

  onDateSelected(event: any): void {
    this.selectedDate = event.value;
  }

  // Selection participants + changement du prix en fonction des participants
  activityPrice: number;
  totalPrice: number | undefined = this.activity.price;

  participants: number[] = [1, 2, 3, 4, 5];

  selectedParticipant = 1;

  calculateTotalPrice(): void {
    this.totalPrice = this.selectedParticipant * this.activity.price;
  }

  constructor(private dateAdapter: DateAdapter<Date>, private router: Router) {
    this.dateAdapter.setLocale('fr');
    this.activityPrice = this.activity.price;
  }

  modalIsVisible: boolean = false;

  showModal() {
    this.modalIsVisible = true;
  }

  OnDateSelected(): void {}

  navigateToPayement(): void {
    const reservationData = {
      date: this.selectedDate,
      activity: this.activity,
      participants: this.selectedParticipant,
      reservationPrice: this.totalPrice,
    };

    const reservations = JSON.parse(
      localStorage.getItem('reservations') || '[]'
    );
    reservations.push(reservationData);
    localStorage.setItem('reservation', JSON.stringify(reservations));

    this.router.navigate(['/payement']);
  }

  ngOnInit() {
    this.activity = {
      id: '1',
      name: "Bapteme de l'air",
      description: 'Saut en parachute',
      price: 245,
      photo: [
        '../../../assets/photo/para.jpeg',
        '../../../assets/photo/splash-parachute.94647fe.jpg',
        '../../../assets/photo/parachute.jpeg',
      ],
    };

    this.selectedParticipant = 1;

    this.calculateTotalPrice();
  }
}
