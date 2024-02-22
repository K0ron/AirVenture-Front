import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../Authentification/domain/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:String ='http://localhost:8080/user'

  constructor(private userQueries : HttpClient) { } // providehttpclient() to be installed in app.config.ts

  updateUser(id:number, user:any): Observable<any> {
    return this.userQueries.put<any>(`${this.baseURL}/${id}`, user);
  }



}

