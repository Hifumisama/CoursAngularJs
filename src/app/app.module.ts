import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';
import { MdInputModule }              from '@angular/material';

import { AppComponent }               from './app.component';
import { ReservationComponent }       from './reservation/reservation.component';

export const approute : Routes  = [
  {path: '*', redirectTo:'reservation'},
  {path: 'reservation', component: ReservationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approute),
    BrowserAnimationsModule,
    MdInputModule,
  ],
  exports: [
    MdInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
