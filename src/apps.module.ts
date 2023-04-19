import { DepartmentModule } from './department/department.module';
import { CustomerModule } from './customer/customer.module';
import { ageRangeValidators } from './customvalidator/validator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

import { AppsComponent } from './apps/apps/apps.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuContent, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app/app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChecknumDirective } from './checknum.directive';
import { TestResolver } from './resolver/test.resolver';



@NgModule({
  declarations: [
    AppsComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ChecknumDirective,
  ],
  imports: [

    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    LayoutModule,
    CustomerModule,
    DepartmentModule,
    HttpClientModule,
    NgxPaginationModule,
  
    Ng2SearchPipeModule
    
  
  ],
  providers: [ageRangeValidators,TestResolver],
  bootstrap: [AppsComponent],
  exports:[AppsComponent]
})
export class AppsModule {}