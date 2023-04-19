import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ageRangeValidators } from 'src/customvalidator/validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  value: any;


  addUserForm: FormGroup = new FormGroup({
  })

  constructor(private formBuilder: FormBuilder,private validator:ageRangeValidators,) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
         
      'age': new FormControl('', this.validator.ageRangeValidator),   
 })


  }

  createUser() {
    this.value = this.addUserForm.value;

    console.log(this.addUserForm.value);

  }
  
 
}





