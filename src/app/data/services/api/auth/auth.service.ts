import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment.dev";
import {map} from "rxjs/operators";
import {Role} from "../../../../models/Role";
import {Login, LoginResponse} from "../../../../models/Login";
import {AuthLocal} from "./auth-local.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL:string = `${environment.URI}`;
  constructor(private http:HttpClient, private authLocal: AuthLocal) { }

  onlogin(login:Login):Observable<LoginResponse>{
    const url = `${this.API_URL}/login`;
    return this.http.post<LoginResponse>(url, login).pipe(
      map(
        value => {
          this.authLocal.isLoggedIn = true;
          if (value.token != null) {
            this.authLocal.token = value.token;
            localStorage.setItem('role', <string>value.msg?.details.role?.role_name);
          }
          return value;
        }
      ));
  }

}
