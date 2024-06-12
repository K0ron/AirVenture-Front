import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getAuthHeaders(),
      withCredentials: true,
    })
  }

  put<T>(endpoint: string, data:any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, {
      headers: this.getAuthHeaders(),
      withCredentials: true,
    })
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.getAuthHeaders(),
      withCredentials: true,
    })
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-type": "application/json"
    })
  }
}
