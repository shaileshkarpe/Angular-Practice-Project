import { HomeComponent } from 'src/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TimeformatComponent } from './timeformat/timeformat.component';
import { TimeComponent } from './time/time.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageComponent } from './page/page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MatSortModule } from '@angular/material/sort';
import { NewobservableComponent } from './newobservable/newobservable.component';
import { ObervablesComponent } from './obervables/obervables.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ReactiveformComponent,
    TimeformatComponent,
    TimeComponent,
    PaginationComponent,
    PageComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
    NewobservableComponent,
    ObervablesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatPaginatorModule
  ],
  exports: [AboutComponent,
    ContactComponent,
    ReactiveformComponent, PaginationComponent,NewobservableComponent,ObervablesComponent]
})
export class LayoutModule { }
