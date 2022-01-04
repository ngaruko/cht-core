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

  permissions = [
    {name:'can-log', description:'user logged', roles:['someone']}
  ]

  error = "Sorry not allowed";
  submitting =false;
  loading =false;
  submit(){
    alert('submit')
  };


  constructor() { }

  ngOnInit(): void {
  }

}
