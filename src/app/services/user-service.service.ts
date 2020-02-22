import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string="https://randomuser.me/api/";
  private resutsFilter:string="?results=";
  constructor(private http: HttpClient) { }

  getUsers (count:number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}${this.resutsFilter}${count}`)
  }
  getUser(id:number){
    return this.http.get<Result>(`${this.baseUrl}`)
  }
}
