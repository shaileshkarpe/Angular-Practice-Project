import { ageRangeValidators } from './../../customvalidator/validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, PatternValidator, MaxValidator } from '@angular/forms';

@Component({
  selector: 'app-timeformat',
  templateUrl: './timeformat.component.html',
  styleUrls: ['./timeformat.component.scss']
})
export class TimeformatComponent implements OnInit {
  formGroup: any;
 setTime: FormGroup = new FormGroup({
  })
  value: any;

  constructor(private formBuilder: FormBuilder ) { }


  ngOnInit(): void {
    this. setTime = this.formBuilder.group({
      'startTime': new FormControl('', [Validators.required,Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'),]),
     
      'endTime': new FormControl('', [Validators.required, Validators.pattern('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$')]),
        
 })
}

  createTime() {
    this.value = this.setTime.value;

    console.log(this.setTime.value);

  }

}

