import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usersEndPoint = "assets/users.mock.ts"

  constructor(private userinforeq: HttpClient) { } // providehttpclient() to be installed in app.config.ts

  getUser(): Observable<any> {
    return this.userinforeq.get<any>(this.usersEndPoint);
    }
  
    
}

