import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-queue-tab',
  templateUrl: './message-queue-tab.component.html',
  styles: [
  ]
})
export class MessageQueueTabComponent implements OnInit {

  constructor() { }
  message ={recipient:"Meme",
  record: {id:4,
    reportedDate:'10/12/2012'},
task:'task',
content:'some',
error: 'error',
state:'state'};
  displayLastUpdated = true;
  basePath = 'paths';

  loading =false;
  error = false


  ngOnInit(): void {
  }

}
