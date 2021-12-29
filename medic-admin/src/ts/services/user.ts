// import { Injectable }      from '@angular/core';

// export class User{
//   {
//     fullname: any;
//     phone: any;
//     name: string
//     // users = [
//   {
//     name: "Me",
//     fullname: "james bond",
//     roles : [0, 1, 2],
//     phone : '097465'
// }]

//     constructor()
//     {
//         this.clientLocationID = null;
//         this.clientLocationName = null;
//     }

// }

export interface User {
  name: string,
    fullname: string,
    roles : any,
    phone : string,
    inactive: boolean
}