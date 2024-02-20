import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('http://localhost:8080/activities');
  }
}
