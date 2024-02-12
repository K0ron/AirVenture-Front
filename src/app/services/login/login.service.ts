import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserLoginData} from "../../models/UserLoginData";
import {Observable} from "rxjs";
import {UserSignupData} from "../../models/userSignupData";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  register(userData: UserSignupData): Observable<any> {
    const newUser = { ...userData, roles: { id: Number(userData.roles) } };
    const userDataJson = JSON.stringify(newUser);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UserSignupData>("http://localhost:8080/register", userDataJson, { headers: headers });
  }

  login(userData: UserLoginData): Observable<any> {
    const userDataJson = JSON.stringify(userData);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<UserLoginData>("http://localhost:8080/login", userDataJson, { headers: headers });
  }
}
