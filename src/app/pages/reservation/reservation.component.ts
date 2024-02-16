import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { GalleriaModule } from 'primeng/galleria';
import { MapComponent } from '../../components/map/map.component';
import { ButtonModule } from 'primeng/button';
import { Activity } from '../../model/Activity';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';

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
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  activity: Activity = {
    id: '',
    name: '',
    description: '',
    photo: [],
  };

  modalIsVisible: boolean = false;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr');
  }

  showModal() {
    this.modalIsVisible = true;
  }

  OnDateSelected(): void {}

  ngOnInit() {
    this.activity = {
      id: '1',
      name: "Bapteme de l'air",
      description: 'Saut en parachute',
      price: '300',
      photo: [
        '../../../assets/photo/para.jpeg',
        '../../../assets/photo/splash-parachute.94647fe.jpg',
        '../../../assets/photo/parachute.jpeg',
      ],
    };
  }

  newReservation() {}
}
