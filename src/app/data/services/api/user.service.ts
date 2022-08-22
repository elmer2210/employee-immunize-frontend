import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../../../models/User";
import {environment} from "../../../../environments/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL:string = `${environment.URI}`;
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    const url = `${this.API_URL}/users`;
    return this.http.get<User[]>(url);
  }

  getUpdateUser(id:number):Observable<User>{
    const url = `${this.API_URL}/users/${id}`;
    return this.http.get<User>(url);
  }

  store(user:User):Observable<User>{
    const url = `${this.API_URL}/users`;
    return this.http.post<User>(url, user);
  }

  update(id:number, user:User):Observable<User>{
    const url = `${this.API_URL}/users/${id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id:number):Observable<User>{
    const url =`${this.API_URL}/users/${id}`;
    return this.http.delete<User>(url);
  }
}
