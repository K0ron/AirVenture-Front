import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAvatarService {
 
  public imageEndPoint = "assets/avatarImages.mock.ts";

  constructor(private userAvatarReq: HttpClient) {}
  getAvatar(): Observable<any> {
    return this.userAvatarReq.get<any>(this.imageEndPoint);
    }
}
