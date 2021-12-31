import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-messages',
  templateUrl: './export-messages.component.html',
  styles: [
  ]
})
export class ExportMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  export(){
    alert('export')
  }
}
