import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';
import { ButtonModule }               from 'primeng/primeng';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approute),
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
