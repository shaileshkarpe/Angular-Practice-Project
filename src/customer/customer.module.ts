import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { GallaryComponent } from './gallary/gallary.component';
import { InfoComponent } from './view/info/info.component';
import { ListComponent } from './gallary/list/list.component';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewComponent,
    GallaryComponent,
    InfoComponent,
    ListComponent,
 
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CustomerComponent,
    GallaryComponent,
    ViewComponent
  ]
})
export class CustomerModule { }
