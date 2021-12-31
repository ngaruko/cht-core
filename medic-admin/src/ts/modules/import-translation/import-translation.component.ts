import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-translation',
  templateUrl: './import-translation.component.html',
  styles: [
  ]
})
export class ImportTranslationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   cancel(){
     alert('cacen');
   }
     submit (){
       alert('sum');
     }
   

   validationError = 'validationError'

}
