import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss']
})
export class RevisionComponent {
  show_msg=true;
 hello='saurabh';
 red='red'

 userData=[
  {'firstName':'shailesh',
 'lastName':'karpe'
  },
  {'firstName':'rahul',
  'lastName':'patil'
  },
  {'firstName':'saurabh',
   'lastName':'kandeker'
  }
    
]

switch_expression='hello'
  constructor() { }



}
