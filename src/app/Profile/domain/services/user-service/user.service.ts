import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordDTO } from '../../models/change-password-dto';
import { User } from '../../../../Authentification/domain/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:String ='http://localhost:8080/user'

  constructor(private userQueries : HttpClient) { } // providehttpclient() to be installed in app.config.ts

  getUserById(id:number): Observable<any> {
    return this.userQueries.get<any>(`${this.baseURL}/${id}`);
  }

  updateUser(id:number, user:any): Observable<any> {
    return this.userQueries.put<any>(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id:number):Observable<any> {
    return this.userQueries.delete<any>(`${this.baseURL}/${id}`);
  }
  
  changePassword(id:number, passwordData:ChangePasswordDTO):Observable<any> {
    return this.userQueries.put<any>(`http://localhost:8080/password-forgotten/${id}`, passwordData);
  }
}