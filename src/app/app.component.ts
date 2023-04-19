import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'ProjectPractice';

  postArray = [
    { title: 'project1', description: 'desc1' },
    { title: 'project2', description: 'desc2' },
    { title: 'project3', description: 'desc3' },
  ];


  postArrayObserble$ = from(this.postArray);

  constructor(){

    this.postArrayObserble$.subscribe({

      next:(data)=>console.log(data),

      error:(error)=>console.log(error),

      complete:()=>console.log('complete '),

    });

  }
  ngAfterViewInit(): void {
   fromEvent(document.getElementById('clickbutton')!,'click').subscribe({

    next:(data)=>console.log(data),

    error:(error)=>console.log(error),

    complete:()=>console.log('complete done!  '),

   })
  }
}
