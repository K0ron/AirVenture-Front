import { ApiService } from './../../../../Authentification/domain/services/api-service/api.service';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ChangePasswordDTO } from '../../models/change-password-dto';
import { User } from '../../../../Authentification/domain/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService : ApiService) { }

  getUserById(id:number): Observable<any> {
    return this.apiService.get<User>(`user/${id}`);
  }

  updateUser(id:number, user:any): Observable<any> {
    return this.apiService.put<User>(`user/${id}`, user);
  }

  deleteUser(id:number):Observable<any> {
    return this.apiService.delete<User>(`user/${id}`);
  }
  
  changePassword(id:number, passwordData:ChangePasswordDTO):Observable<any> {
    return this.apiService.put<ChangePasswordDTO>(`password-change/${id}`, passwordData);
  }
}
