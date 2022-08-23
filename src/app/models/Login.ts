import {Role} from "./Role";
import {User} from "./User";

export interface Login{
  username:string,
  password:string,
}
export interface LoginResponse {
  msg?: Msg;
  token?: string;
}

interface Msg {
  summary: string;
  code: string;
  details: User;
}

interface Data {
  user: User;
}
