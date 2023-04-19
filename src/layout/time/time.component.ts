import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  @Input() myValue:any
  constructor( ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

}
