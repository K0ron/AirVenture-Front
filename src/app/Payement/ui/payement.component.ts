import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { Reservation } from '../../Reservation/domain/model/Reservation';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-payement',
  standalone: true,
  imports: [
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    MatDatepickerModule,
    CommonModule,
    CalendarModule,
    InputTextModule,
    MatDividerModule,
    MatListModule,
    DividerModule,
  ],
  templateUrl: './payement.component.html',
  styleUrl: './payement.component.scss',
})
export class PayementComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  reservations: Reservation[] = [];

  constructor() {}
  ngOnInit() {
    this.reservations = this.getLocalReservation();
    console.log('Reservations:', this.reservations);
  }

  getLocalReservation(): Reservation[] {
    return JSON.parse(localStorage.getItem('reservation') || '[]');
  }
}
