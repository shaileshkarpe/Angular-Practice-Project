import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }
  myObs=Subscription
  myObs1=Subscription
  ngOnInit(): void {

    const newObservable = interval(1000);



     newObservable.subscribe((number)=>{

      if(number%2==0){

        console.log('Even Number:'+number);

      }



    });

    newObservable.pipe(filter((number)=>{

      return number % 2 ==0;

    }),

    map((number)=>{

      return 'even number:'+number;

    })

    ).subscribe((number)=>{

      console.log(number);

    })

  }
  stopSubcription(){

  }


}