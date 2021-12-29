import { Injectable, NgIterable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import {DbService } from '@mm-services/db.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})


export class UsersService {


  urlPrefix: string = "http://admin:pass@localhost:5988";
  //dbService: DbService;
  url: any;

  constructor(private httpClient: HttpClient)
  {
  }
  // private getUsers() {
  //   return this.dbService
  //     .get()
  //     .get()

  // }

  getUsers():Observable<any> {

    const url = 'http://admin:pass@localhost:5988/api/v1/users';

    console.log('looking for users')
    return this.httpClient.get(url);

    //return this.httpClient.get<any[]>(url);//.toPromise();
  }
}


