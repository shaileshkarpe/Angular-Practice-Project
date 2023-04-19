import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value: any;
  timerSubcription!:Subscription
  constructor( private activatedrout:ActivatedRoute) { }

  ngOnInit(): void {
    this.value=this.activatedrout.snapshot.data
    console.log(this.activatedrout.snapshot.data)


    const newobservable= interval(1000);
    this.timerSubcription =newobservable.subscribe((data)=>{
      console.log(new Date().toLocaleTimeString()+''+data);
    });
    
  }
  cancelTimer(){
    console.log('cancel timer...')
    this.timerSubcription.unsubscribe();
  }

}
