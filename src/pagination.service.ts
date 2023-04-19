import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {


  constructor(private http:HttpClient) { 

  }
  url:string="http://localhost:3000/users"
  
  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.url)
  }


}
