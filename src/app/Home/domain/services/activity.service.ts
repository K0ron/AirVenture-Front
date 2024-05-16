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

  getActivityPicture(activityId: number): Observable<Blob> {
    return this.httpClient.get(`http://localhost:8080/files/${activityId}`, { responseType: 'blob' })
  }

  getActivitiesByContinent(continent: string): Observable<Iactivity[]> {
    return this.httpClient.get<Iactivity[]>(
      `${this.baseUrl}/filter?continent=${continent}`
    );
  }
}
