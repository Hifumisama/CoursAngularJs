import { Component, OnInit }          from '@angular/core';

import { Reservation }                from './reservation';

import { ReservationService }         from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})



export class ReservationComponent implements OnInit {
  public reservation : Reservation;
  public clicked: boolean;

  constructor( private reservationService :  ReservationService ) {
    this.reservation = new Reservation(null, null, null);

    }

  ngOnInit() {

  }

  reserver() :void {
    console.log("voici le log : ", this.reservation.dateReservation, this.reservation.nom, this.reservation.prenom);
    this.clicked = true;
    this.reservationService.creerReservation(this.reservation);

    let reservation: Reservation[] = this.reservationService.obtenirReservations();
  }
}
