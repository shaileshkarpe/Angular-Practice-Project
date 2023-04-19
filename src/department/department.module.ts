import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { HistoryComponent } from './history/history.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DepartmentComponent,

    HistoryComponent,
    ListdeptComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HistoryComponent,
    ListdeptComponent
  ]
})
export class DepartmentModule { }
