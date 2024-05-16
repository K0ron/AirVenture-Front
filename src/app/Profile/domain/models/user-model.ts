import { Reservation } from "./reservation";

export interface User {
  id : number
  firstName: string,
  lastName: string,
  email: string,
  password:string,
  reservations:Reservation[],
}

