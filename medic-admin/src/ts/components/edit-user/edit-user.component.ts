import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  errors = {code:'401', username:'forbdden', email:'email'}


  submit(){
    alert('submit')
  }

  cancel(){
    alert('cancel')
  }
  editUser(){
    alert('edit')
  }
   locale={name:'en'}


}
