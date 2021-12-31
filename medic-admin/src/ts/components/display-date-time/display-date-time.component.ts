import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-date-time',
  templateUrl: './display-date-time.component.html',
  styles: [
  ]
})
export class DisplayDateTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dateFormatExample ='dateFormatExample'
  datetimeFormatExample ='datetimeFormatExample'
  status = {msg:'pass', loading:false, error:false, success:true}
  submitAdvancedSettings(){
    alert('submitAdvancedSettings()')
  }
}
