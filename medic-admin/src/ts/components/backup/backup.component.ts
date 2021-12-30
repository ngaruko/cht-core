import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-backup',
  templateUrl: './backup.component.html',
  styles: [
  ]
})
export class BackupComponent implements OnInit {
  backup = {
    name:'Download Current Settings',
    url:'http://somelink.com'
  }
  status ={error:false, uploading:false }

  constructor() { }

  ngOnInit(): void {
  }

}
