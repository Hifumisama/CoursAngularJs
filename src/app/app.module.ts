import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';
import { ButtonModule }               from 'primeng/primeng';
import { MdInputModule }              from '@angular/material';
import { MdButtonModule }             from '@angular/material';
import { MdDatepickerModule }         from '@angular/material';
import { MdNativeDateModule }         from '@angular/material';

import { AppComponent }               from './app.component';
import { ReservationComponent }       from './reservation/reservation.component';
import { AccueilComponent }           from './accueil/accueil.component';

export const approute : Routes  = [
  {path: '', redirectTo:'/accueil', pathMatch:"full"},
  {path: 'accueil', component: AccueilComponent},
  {path: 'reservation', component: ReservationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approute),
    ButtonModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
