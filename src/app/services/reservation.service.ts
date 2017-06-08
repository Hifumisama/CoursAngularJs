import { Injectable }       from '@angular/core';

import { Reservation }      from "../reservation/reservation";

@Injectable()

export class ReservationService {

  reservations : Reservation[];

  constructor() {
    this.reservations = [];

  }

  public creerReservation(reservation:Reservation) : void {
    this.reservations.push(Object.assign({}, reservation));

  }

  public obtenirReservations() : Reservation[] {
    console.log(this.reservations);
    return this.reservations;

  }
}
