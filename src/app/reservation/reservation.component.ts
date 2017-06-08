import { Component, OnInit }          from '@angular/core';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})



export class ReservationComponent implements OnInit {

  public dateReservationModel: Date;
  public nomModel: String;
  public prenomModel: String;
  public clicked: boolean;

  constructor( ) {  }

  ngOnInit() {

  }

  reserver() :void {
    console.log("voici le log : ", this.dateReservationModel, this.prenomModel, this.nomModel);
    this.clicked = true;
  }
}
