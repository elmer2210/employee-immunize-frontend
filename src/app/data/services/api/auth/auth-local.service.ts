import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from "../../../../models/User";
import {Role} from "../../../../models/Role";


@Injectable({
  providedIn: 'root'
})

export class AuthLocal {
  private login = new BehaviorSubject<boolean>(this.isLoggedIn);
  public login$ = this.login.asObservable();

  constructor() {
  }

  changeTheme(theme: string) {
    // const themePath = themes.find(element => element.name == theme)?.path;
    //
    // const element = document.getElementById('theme-css');
    // if (element && themePath) {
    //   element.setAttribute('href', themePath);
    // }
  }

  get isLoggedIn(): boolean {
    // @ts-ignore
    return Boolean(JSON.parse(localStorage.getItem('isLoggedIn')));
  }

  set isLoggedIn(value: boolean) {
    this.login.next(value);
    localStorage.setItem('isLoggedIn', String(value));
  }

  // @ts-ignore
  get token(): string | null {
    return localStorage.getItem('token');
  }

  set token(value: string ) {
    localStorage.setItem('token', value);
  }

  get auth(): User{
    return JSON.parse(String(localStorage.getItem('auth')));
  }

  set auth(user: User | undefined | null) {
    localStorage.setItem('auth', JSON.stringify(user));
  }

  get role(): Role {
    return JSON.parse(String(localStorage.getItem('role')));
  }

  set role(role: Role | undefined | null) {
    localStorage.setItem('role', JSON.stringify(role));
  }

  get roles(): Role[] {
    return JSON.parse(String(localStorage.getItem('roles')));
  }

  set roles(roles: Role[] | undefined | null) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  get keepSession(): boolean | null {
    return JSON.parse(String(localStorage.getItem('keepSession')));
  }

  set keepSession(value: boolean | undefined | null) {
    localStorage.setItem('keepSession', JSON.stringify(value));
  }

  removeLogin() {
    localStorage.clear();
    this.login.next(false);
    this.login.next(false);
  }
}
