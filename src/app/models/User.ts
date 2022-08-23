import {Role} from "./Role"
export interface User{
  id?: number,
  identity_card: string,
  names: string,
  surname: string,
  email: string,
  username?: string,
  password?: string,
  role_id:number,
  role?: Role,
}
