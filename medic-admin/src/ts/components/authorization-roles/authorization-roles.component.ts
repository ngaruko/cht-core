import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-authorization-roles',
  templateUrl: './authorization-roles.component.html',
  styles: [
  ]
})
export class AuthorizationRolesComponent implements OnInit {
  // permission = {  //placeholders for templates to work
  //   name: 'can-view-tabs',
  //   roles: [

  //     {name : 0},
  //     {name : 1},
  //     {name :2}
  //   ]
  // };
  submitting = false;
  loading = false

  roles = [


    {role : "data_entry", key:"usertype.data-entry", name:"Data entry - access to Medic Reporter only" },
    {role : "analytics", key:"usertype.analytics", name:"Analytics - Data export via URL only" },
    {role : "gateway", key:"usertype.gateway", name:"Gateway - Limited access user for Medic Gateway" },
  ]

  error ="Error detected";
  validation ={key:"somekey", name:"somevalue"};
  add(){
    alert('adding')
  }
  key = 4;
  delete(key){
    alert('deleting' + 4)
  }
  deleting = false;

  constructor() { }

  ngOnInit(): void {
  }

}
