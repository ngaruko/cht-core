import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-test',
  templateUrl: './sms-test.component.html',
  styles: [
  ]
})
export class SmsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  errors ={from:'28374', message:'errort message'}

}
