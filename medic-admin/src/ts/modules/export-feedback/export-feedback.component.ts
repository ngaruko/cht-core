import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-feedback',
  templateUrl: './export-feedback.component.html',
  styles: [
  ]
})
export class ExportFeedbackComponent implements OnInit {

  constructor() { }
  export(){
    alert('export')
  }

  ngOnInit(): void {
  }
feedback= {items:[{info:'info'}]}
}
