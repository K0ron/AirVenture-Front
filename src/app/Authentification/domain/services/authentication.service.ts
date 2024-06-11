import { ApiService } from './api-service/api.service';
import { UserLocalStorageHandlerService } from './../../../Profile/domain/services/user-local-storage/user-local-storage-handler.service';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, pipe} from "rxjs";
import {User} from "../models/User";
import { UserIdDTO } from '../../../Profile/domain/models/userIdDTO';
import { ChangePasswordDTO } from '../../../Profile/domain/models/change-password-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private UserLocalStorageHandlerService:UserLocalStorageHandlerService, private apiService:ApiService) { }

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
          let userFromBack:UserIdDTO = response.body;
          this.UserLocalStorageHandlerService.saveUserIdInLocalStorage("userId", userFromBack.id);
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
      }),
      catchError(async () => {
        return false;
      })
    )
  }
  
  logout():Observable<any> {
    return this.apiService.post<any>('http://localhost:8080/logout'); 
  }


  changePassword(id:number, passwordData:ChangePasswordDTO):Observable<any> {
    return this.apiService.put<ChangePasswordDTO>(`password-change/${id}`, passwordData);
  }
}
