import {Role} from "./Role"
export interface User{
  id?: number,
  ci: string,
  names: string,
  surname: string,
  email: string,
  username?: string,
  password?: string,
  role: string
}
