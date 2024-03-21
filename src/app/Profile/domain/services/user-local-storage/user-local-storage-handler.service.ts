import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageHandlerService {

  constructor() { }

  saveUserInLocalStorage(user:string, objectToStock:any) {
    let localStorageGetItem = localStorage.getItem('user')
    if (localStorageGetItem !== null){
      localStorage.removeItem('user');
      const objectToString = JSON.stringify(objectToStock);
      localStorage.setItem(user, objectToString);
    } else {
      const objectToString = JSON.stringify(objectToStock);
      localStorage.setItem(user, objectToString);
  }}

  getUserFromLocalStorage(){
    const userString = localStorage.getItem('user');
    if(userString) {
    return JSON.parse(userString);
    }
  }

  getUserIdFromLocalStorage():number {
    const userFromLocalStorage = this.getUserFromLocalStorage();
    const id = userFromLocalStorage.id;
    return id;
  }
}
