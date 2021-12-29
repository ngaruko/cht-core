import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
users = [
  {
    name: "Me",
    fullname: "james bond",
    roles : [0, 1, 2],
    phone : '097465'
}]

roles =[{
  name : 'regular user'
}]

  constructor() { }

  ngOnInit(): void {
  }

}

