import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { Activity } from '../../Reservation/domain/model/Activity';
import { Reservation } from '../../Reservation/domain/model/Reservation';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ReservationService } from '../../Reservation/domain/services/reservation.service';

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [DividerModule, ButtonModule, CommonModule, DialogModule],
  templateUrl: './payement2.component.html',
  styleUrl: './payement2.component.scss',
})
export class PayementComponent2 implements OnInit {
  reservations: Reservation[] = [];
  modalIsVisible: boolean = false;

  activity: Activity = {
    id: 0,
    name: '',
    description: '',
    photo: [],
    price: 0,
    country: '',
    continent: '',
  };

  getLocalReservation(): Reservation[] {
    return JSON.parse(localStorage.getItem('reservation') || '[]');
  }

  showModal() {
    this.modalIsVisible = true;
  }

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservations = this.getLocalReservation();
    console.log('Reservations:', this.reservations);

    this.activity = {
      id: 1,
      name: "Bapteme de l'air",
      country: 'France',
      continent: 'Europe',
      description: 'Saut en parachute',
      price: 245,
      photo: [
        '../../../assets/photo/para.jpeg',
        '../../../assets/photo/splash-parachute.94647fe.jpg',
        '../../../assets/photo/parachute.jpeg',
      ],
    };
  }

  createReservation() {
    this.showModal();
  }
}
