import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() myvalue: any;


  @Output() newEvent = new EventEmitter();
  
  constructor() { }
  ngOnInit(): void {
  }

  Submit(value: any) {
    this.newEvent.emit(value);
  }

}
