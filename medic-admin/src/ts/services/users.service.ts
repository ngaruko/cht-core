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

   users =  [
      {
        name: "Me",
        fullname: "james bond",
        roles : [0, 1, 2],
        phone : '097465'
    },
    {
      name: "Me",
      fullname: "james bond",
      roles : [0, 1, 2],
      phone : '097465'
  },
  {
    name: "Me",
    fullname: "james bond",
    roles : [0, 1, 2],
    phone : '097465'
}]



  getUsers():Observable<any> {
    console.log('looking for users')

    try {
      const url = 'http://admin:pass@localhost:5988/api/v1/users';
    return this.httpClient.get(url);

    } catch (error) {
      console.log('errors, connections fecth users' )
      //return users

    }

    //return this.httpClient.get<any[]>(url);//.toPromise();
  }
}


