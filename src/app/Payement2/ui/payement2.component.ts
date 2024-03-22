import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { Activity } from '../../Reservation/domain/model/Activity';
import { Reservation } from '../../Reservation/domain/model/Reservation';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { User } from '../../Profile/domain/models/user-model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [
    DividerModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './payement2.component.html',
  styleUrl: './payement2.component.scss',
})
export class PayementComponent2 implements OnInit {
  reservation: Reservation[] = [];
  modalIsVisible: boolean = false;
  reservationForm!: FormGroup;
  reservationDate: Date = new Date();
  numberOfParticipents: number = 0;
  reservationPrice: number = 0;

  activity: Activity = {
    id: 0,
    name: '',
    description: '',
    photo: [],
    price: 0,
    country: '',
    continent: '',
  };

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  getLocalReservation(): Reservation[] {
    return JSON.parse(localStorage.getItem('reservation') || '[]');
  }

  showModal() {
    this.modalIsVisible = true;
  }

  constructor() {}

  ngOnInit() {
    this.reservation = this.getLocalReservation();
    console.log('Reservation:', this.reservation);

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

    this.user = {
      firstName: 'Kevin',
      lastName: 'Caron',
      email: 'KC@gmail.com',
      password: '',
    };
  }

  createReservation() {
    this.showModal();
  }
}
