export class Reservation {

  public dateReservation: Date;
  public nom: String;
  public prenom: String;

  constructor (dateReservation : Date, nom: String, prenom: String) {
    this.dateReservation = dateReservation;
    this.nom = nom;
    this.prenom = prenom;

  };

}
