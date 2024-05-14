import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getAllReservation(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getOneReservation(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  createReservation(newReservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      `${this.apiUrl}/reservation`,
      newReservation
    );
  }

  updateReservation(
    newReservation: Reservation,
    id: number
  ): Observable<Reservation> {
    return this.httpClient.put<Reservation>(
      `${this.apiUrl}/reservation/${id}`,
      newReservation
    );
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/reservation/${id}`);
  }
}
