import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-reports',
  templateUrl: './export-reports.component.html',
  styles: [
  ]
})
export class ExportReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  export(){
    alert('export')
  }

}
