import { Injectable }       from '@angular/core';

import { Reservation }      from "../reservation/reservation";

@Injectable()

export class ReservationService {

  reservations : Reservation[];

  constructor() {
    this.reservations = [];
  }

  public creerReservation(reservation:Reservation) : void {
    this.reservations.push(reservation);

  }

  public obtenirReservations() : Reservation[] {
    return this.reservations;
    
  }
}
