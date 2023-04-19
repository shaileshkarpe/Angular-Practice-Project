import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newobservable',
  templateUrl: './newobservable.component.html',
  styleUrls: ['./newobservable.component.scss'],
})
export class NewobservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
    const newobservable$ = new Observable<number>((observer) => {
      let timer=0;
      for (let i = 0; i <= 5; i++) {setTimeout(() => {
        if(i==4){
          observer.error('unknown error')
        }
        observer.next(i)
      }, 1000);

        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
       next: (data: number) => console.log(data),
       error: (error: string) => console.log(error),
       complate: ()=>console.log('complete done'),
    };
       newobservable$.subscribe(observer);
  }
  
  cancelTimer(){

  }
}
