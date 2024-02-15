import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, pipe} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>("http://localhost:8080/login", JSON.stringify({email, password}), {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
      observe: "response"
    }).pipe(
      map(response => {
        if (response.status === 200) {
          localStorage.setItem('LoggedIn', 'true');
          return true;
        }
        return false;
      }))
  }

  register(userData: User): Observable<boolean> {
    userData.roles = { id: userData.roles };
    return this.httpClient.post<any>("http://localhost:8080/register", JSON.stringify(userData), {
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
