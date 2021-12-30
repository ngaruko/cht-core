import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-translation',
  templateUrl: './edit-translation.component.html',
  styles: [
  ]
})
export class EditTranslationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  errors = {code:'401', name:'forbdden', key:'key'}


  submit(){
    alert('submit')
  }

  cancel(){
    alert('cancel')
  }
  delete(){
    alert('delte')
  }
   locale={name:'en'}
}
