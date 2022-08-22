import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../../../models/User";
import {environment} from "../../../../environments/environment.dev";
import {map} from "rxjs/operators";
import {Role} from "../../../models/Role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL:string = `${environment.URI}`;
  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<User>{
    const url = `${this.API_URL}/users?username=${username}&password=${password}`;
    return this.http.get<User>(url);
  }
}
