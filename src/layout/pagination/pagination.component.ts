import { ActivatedRoute } from '@angular/router';
import { PaginationService } from './../../pagination.service';

import { Users } from './../../users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  users:Users[]=[];
  p:number=1;
  firstName:any

  constructor(public service:PaginationService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
 
    this.users=this.activatedRoute.snapshot.data['userData']
    console.log(this.users)
    // this.service.getUsers().subscribe((data)=>{
    //   this.users=data
    // })
  }
  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }

  }
}
