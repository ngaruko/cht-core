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

  //status ={success:true, error :'err'}
model = {error:{gateway_number: 2,
  default_country_code:'23'}};
  errors = {fields:{messagingWindow:'windoe'}}

  status = {msg:'failed', loading:true, success:true, error :'err'}
  submit(){
    alert('submit')
  }
}
