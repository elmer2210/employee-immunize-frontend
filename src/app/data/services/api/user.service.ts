import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../../../models/User";
import {environment} from "../../../../environments/environment.dev";
import {map} from "rxjs/operators";
import {Response} from "../../../models/Response";
import {AuthLocal} from "./auth/auth-local.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL:string = `${environment.URI}`;

  constructor(private http:HttpClient, private authLocal: AuthLocal) {
  }


  getUsers():Observable<User>{
    const url = `${this.API_URL}/users`;
    return this.http.get<Response>(url).pipe(
      map( value => {
        return value.msg.details;
      })
    );
  }

  getUpdateUser(id:number):Observable<User>{
    const url = `${this.API_URL}/user/${id}`;
    return this.http.get<Response>(url).pipe(
      map(data =>{
        return data.msg.details;
      }));
  }

  store(user:User):Observable<User>{
    const url = `${this.API_URL}/register`;
    return this.http.post<User>(url, user);
  }

  update(id:number, user:User):Observable<User>{
    const url = `${this.API_URL}/user/${id}`;
    return this.http.put<Response>(url, user).pipe(
      map(data =>{
        return data.msg.details;
      }));
  }

  deleteUser(id:number):Observable<User>{
    const url =`${this.API_URL}/user/${id}`;
    return this.http.delete<User>(url);
  }
}
