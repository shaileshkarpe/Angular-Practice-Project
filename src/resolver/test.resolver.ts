import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PaginationService } from 'src/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class TestResolver implements Resolve<any> {

  constructor(private service:PaginationService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getUsers()
  }
}
