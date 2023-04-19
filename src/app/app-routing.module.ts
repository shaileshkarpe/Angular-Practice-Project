import { RevisionComponent } from './revision/revision.component';
import { LoginComponent } from './../layout/login/login.component';
import { ListdeptComponent } from './../department/listdept/listdept.component';
import { HistoryComponent } from './../department/history/history.component';
import { DepartmentComponent } from './../department/department.component';
import { CustomerComponent } from './../customer/customer.component';
import { ParentComponent } from './../layout/parent/parent.component';
import { PaginationService } from 'ngx-pagination';
import { PageComponent } from './../layout/page/page.component';
import { PaginationComponent } from './../layout/pagination/pagination.component';
import { TimeComponent } from './../layout/time/time.component';
import { ContactComponent } from './../layout/contact/contact.component';
import { AboutComponent } from './../layout/about/about.component';
import { ReactiveformComponent } from './../layout/reactiveform/reactiveform.component';
import { AppsComponent } from './../apps/apps/apps.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { HomeComponent } from 'src/home/home.component';
import { TimeformatComponent } from 'src/layout/timeformat/timeformat.component';
import { DemoGuard } from 'src/guard/demo.guard';
import { TestResolver } from 'src/resolver/test.resolver';
import { GallaryComponent } from 'src/customer/gallary/gallary.component';
import { ViewComponent } from 'src/customer/view/view.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reactive', component: ReactiveformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'time', component: TimeformatComponent, },
  { path: 'times', component: TimeComponent,data:{id:'1' , name:'shailesh'} },
  { path: 'parent', component: ParentComponent },
  {
    path: 'pagination',
    component: PaginationComponent,

    canActivate: [DemoGuard],

    resolve: {
      userData: TestResolver,
    },
  },
  {path:'sk', component:RevisionComponent},
  { path: 'page', component: PageComponent },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'gallary', component: GallaryComponent },
      { path: 'view', component: ViewComponent },
    ],
  },

  { path:'department' ,component:DepartmentComponent,

children:[
{path:'history', component:HistoryComponent},
{path:'list' ,component:ListdeptComponent}

]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
