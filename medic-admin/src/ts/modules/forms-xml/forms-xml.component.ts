import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-xml',
  templateUrl: './forms-xml.component.html',
  styles: [
  ]
})
export class FormsXmlComponent implements OnInit {
  upload(){
    alert('upload');
  }
  
  form = {_id:'form-id', translation_key : 'key'}
  status = {errorMessage:'Eror, ', uploading:false, error:false }

  constructor() { }

  ngOnInit(): void {
  }

}
