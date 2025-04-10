import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  startPoint: string = '';
  endPoint: string = '';
  journeys:any = []; //array initialisation
  visualRepresentation:any='';
  activateCurve:any=false;

  addJourney(start: string, end: string) {
    start = start.substring(0, 3).toUpperCase();
    end = end.substring(0, 3).toUpperCase();
    let lane = 'down';
    if(this.journeys.length === 0){ //for first journey maa-hyd example visualrepresentation is null
        this.visualRepresentation = null; // only dot should be visible
    } else if(this.journeys.length > 0){
      if(this.journeys[this.journeys.length-1].end == start){ //check if previous end point is equal to current start point 
        if(this.activateCurve){ //if it is already in up layer bring it down
          this.activateCurve = false;
          this.visualRepresentation = 'downcurve'
        } else {
          this.visualRepresentation = 'line'; //show line if maa-hyd hyd-ooty 
        }
      } else if((this.journeys[this.journeys.length-1].start == start) && (this.journeys[this.journeys.length-1].end === end)){ 
        //if same maa-hyd maa-hyd example bring it up to lane up 
        this.visualRepresentation = 'line'; //and it should be line
        if(!this.activateCurve){
          if(this.journeys[this.journeys.length-2].lane == 'up'){
            this.journeys[this.journeys.length-1].visual = 'arrow';
            this.journeys[this.journeys.length-1].lane = 'up';
          } else {
            this.journeys[this.journeys.length-1].visual = 'curve';
            this.journeys[this.journeys.length-1].lane = 'up';
          }
        }
        this.activateCurve=true;
        lane = 'up'; //lane up 
      } else  {
        if(this.activateCurve){
          this.activateCurve = false;
          this.visualRepresentation = 'downcurve'
        } else {
          this.visualRepresentation = 'arrow'; //if start end of both are diff represent with arrow
        }
      }
    }
    //this array has start end visual (curve,arrow,downcurve,upcurve) , lane up and down
    this.journeys.push({ start:start, end:end , visual:this.visualRepresentation, lane:lane});
  }
  
}
