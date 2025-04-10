import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
    { path: '', component:TripComponent}, //add canActivate 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
