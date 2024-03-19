import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iactivity } from '../models/Iactivity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private baseUrl = 'http://localhost:8080/activities';

  constructor(private httpClient: HttpClient) {}

  getAllActivities(): Observable<Iactivity[]> {
    return this.httpClient.get<Iactivity[]>(this.baseUrl);
  }

  getActivitiesByContinent(continent: string): Observable<Iactivity[]> {
    return this.httpClient.get<Iactivity[]>(
      `${this.baseUrl}/filter?continent=${continent}`
    );
  }
}
