
import { Injectable }       from '@angular/core';

import { Reservation }      from "../reservation/reservation";

import { Http, Headers }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReservationService {

  reservations : Reservation[];

  constructor(private http: Http) {
    this.reservations = [];

  }

  public creerReservation(reservation:Reservation) {

    /*
      on utilise la méthode post, qui permet de préparer la requête post vers
      notre API, pour cela on indique l'url cible, le corps de la réponse,
      et aussi la précision du type de données envoyées à notre serveur.

      On fait cette fonction en asynchrone
     */
     //this.reservations.push(Object.assign({}, reservation));
    this.http.post('http://localhost:3200/reservation',
    JSON.stringify(reservation),
    { headers :new Headers({'Content-type':'application/json'})})
    return ((Response) => {Response.json() as Reservation});


  }

  public obtenirReservations() : Reservation[] {
    console.log(this.reservations);
    return this.reservations;

  }
}
