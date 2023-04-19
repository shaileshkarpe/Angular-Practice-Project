import { Users } from './../../users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor() {}

firstName:any
Users:any;
ps:any;

  ngOnInit(): void {}

  displayedColumns: string[] = [

    'id',

    'firstname',

    'lastname',

    'email',

    'mobile',

  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

  @ViewChild(MatSort)sort!:MatSort;



  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;



    this.dataSource.sort = this.sort;



    const sortState: Sort = {active: 'id', direction: 'desc'};



    this.sort.active = sortState.active;



    this.sort.direction = sortState.direction;



    this.sort.sortChange.emit(sortState);

  }
}
   
 
export interface PeriodicElement {
  id: number;
  firstname: string;
  lastname: String;
  email: String;
  mobile: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    firstname: 'saurabh',
    lastname: 'Kandekar',
    email: 'saurabhkandekar66@gmail.com',
    mobile: 9373137809,
  },

  {
    id: 2,
    firstname: 'Akash',
    lastname: 'Aher',
    email: 'akshaher12@gmail.com',
    mobile: 7038353453,
  },


  {
    id: 3,
    firstname: 'Ajit',
    lastname: 'Aher',
    email: 'ajitaher6@gmail.com',
    mobile: 7218996911,
  },
  {
    id: 4,
    firstname: 'Amol',
    lastname: 'Bhomale',
    email: 'amolbhomale23@gmail.com',
    mobile: 7823459623,
  },
  {
    id: 5,
    firstname: 'sandip',
    lastname: 'Kokane',
    email: 'sandipkokane45@gmail.com',
    mobile: 9856231478,
  },

  {
    id: 6,
    firstname: 'shailesh',
    lastname: 'Karpe',
    email: 'shaileshkarpe2018@gmail.com',
    mobile: 9921223913,
  },
  {
    id: 7,
    firstname: 'sahil',
    lastname: 'Kadam',
    email: 'sahilkadam24@gmail.com',
    mobile: 9658741425,
  },
  {
    id: 8,
    firstname: 'gokul',
    lastname: 'Kadam',
    email: 'gokulkadam86@gmail.com',
    mobile: 9389562478,
  },
  {
    id: 9,
    firstname: 'arjun',
    lastname: 'tendulkar',
    email: 'arjuntendulkar@gmail.com',
    mobile: 7548958651,
  },

  {
    id: 10,
    firstname: 'tanvir',
    lastname: 'patel',
    email: 'tanvirpatel56@gmail.com',
    mobile: 9358496253,
  },
];

