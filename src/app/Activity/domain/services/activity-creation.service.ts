import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Activity} from "../models/Activity";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityCreationService {
  constructor(private httpClient: HttpClient) { }

  createActivity(activity: Activity): Observable<boolean> {
    return this.httpClient.post<any>("http://localhost:8080/activity", JSON.stringify(activity), {
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
