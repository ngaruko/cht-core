import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styles: [
  ]
})
export class EditLanguageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  errors = {code:'401', name:'forbdden'}


  submit(){
    alert('submit')
  }

  cancel(){
    alert('cancel')
  }

}
