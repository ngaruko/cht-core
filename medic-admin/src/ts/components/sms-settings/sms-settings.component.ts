import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-settings',
  templateUrl: './sms-settings.component.html',
  styles: [
  ]
})
export class SmsSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
model = {error:{gateway_number: 2,
  default_country_code:'23'}};
  errors = {fields:{messagingWindow:'windoe'}}

  status = {msg:'failed', loading:true}
}
