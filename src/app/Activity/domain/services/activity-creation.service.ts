import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Activity} from "../models/Activity";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityCreationService {
  constructor(private httpClient: HttpClient) { }

  uploadPicture(picture: File): Observable<boolean> {
    const activityPicture = new FormData();
    activityPicture.append("file", picture);

    return this.httpClient.post<any>("http://localhost:8080/upload", activityPicture , {
      withCredentials: true,
      observe: "response"
    }).pipe(
      map(response => {
        return response.status === 200;
      }))
  }

  createActivity(activity: Activity): Observable<boolean> {
    return this.httpClient.post<Activity>("http://localhost:8080/activities", JSON.stringify(activity) , {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
      observe: "response"
    }).pipe(
      map(response => {
        return response.status === 201;
      }))
  }
}
