import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageHandlerService {

  constructor() { }

  saveUserIdInLocalStorage(user:string, objectToStock:any) {
    let localStorageGetItem = localStorage.getItem('userId')
    if (localStorageGetItem !== null){
      localStorage.removeItem('userId');
      const objectToString = JSON.stringify(objectToStock);
      localStorage.setItem(user, objectToString);
    } else {
      const objectToString = JSON.stringify(objectToStock);
      localStorage.setItem(user, objectToString);
  }}

  getUserIdFromLocalStorage(){
    const userString = localStorage.getItem('userId');
    if(userString) {
    return JSON.parse(userString);
    }
  }

}
