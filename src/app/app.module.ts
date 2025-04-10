import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
