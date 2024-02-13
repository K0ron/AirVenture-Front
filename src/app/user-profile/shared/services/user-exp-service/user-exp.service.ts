import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserExpService {

  private expEndPoint = "assets/activities.mock.ts";

  

  constructor(private userExpReq: HttpClient) {}
    getUserExp(): Observable<any> {
      return this.userExpReq.get<any>(this.expEndPoint);
      }
   
}
