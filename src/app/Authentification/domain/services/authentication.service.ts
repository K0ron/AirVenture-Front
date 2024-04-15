import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, pipe} from "rxjs";
import {User} from "../models/User";
import { UserLocalStorageHandlerService } from '../../../Profile/domain/services/user-local-storage/user-local-storage-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private userLocalStorageHandlerService:UserLocalStorageHandlerService) { }

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
          console.log(response.body)
          localStorage.setItem('LoggedIn', 'true');
          let userFromBack:User = response.body;
          console.log(userFromBack.id)
          let idUserFromBack = this.userLocalStorageHandlerService.saveUserIdInLocalStorage("userId", userFromBack.id);
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
/*   
  logout(): void {
    this.httpClient.post<any>('http://localhost:8080/logout', {}).subscribe();   delete cookie, marche pas
  } */

}
