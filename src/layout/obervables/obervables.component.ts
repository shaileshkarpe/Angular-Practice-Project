import { observableClass$, subscriberImpl } from './../../observer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obervables',
  templateUrl: './obervables.component.html',
  styleUrls: ['./obervables.component.scss']
})
export class ObervablesComponent implements OnInit {
  timerConsolSubcription: any;
  timers: number[]=[];

  constructor() { }

  ngOnInit(): void {

    // observableClass$.subscribe(subscriberImpl)

    const newObservable$= new Observable<number>((observer)=>{

      let i=0;

      let interval=setInterval(()=>{

        console.log('I let i:number ing');

        observer.next(i++);

        if(i===6){



        }

      },1000);

      return ()=>{

        console.log('called when observer is unsubscribed');

        clearInterval(interval);

      };

    });

    this.timerConsolSubcription=newObservable$.subscribe((data)=>{

      this.timers.push(data);

    })

   

  }

  cancelTimer(){

    console.log("cancel the timer");

    this.timerConsolSubcription.unsubscribe();

  }

 

}