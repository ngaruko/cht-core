import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-authorization-permissions',
  templateUrl: './authorization-permissions.component.html',
  styles: [
  ]
})
export class AuthorizationPermissionsComponent implements OnInit {
  permission = {  //placeholders for templates to work
    name: 'can-view-tabs',
    roles: [

      {name : 0},
      {name : 1},
      {name :2}
    ]
  };

  roles = [

    {name : "National Admin"},
    {name : "Local Admin"},
    {name : "Staff Nurse"}
  ]

  error = "Sorry not allowed";


  constructor() { }

  ngOnInit(): void {
  }

}
