import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-contacts',
  templateUrl: './export-contacts.component.html',
  styles: [
  ]
})
export class ExportContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  error = 'some error'
  export(){
    alert('export')
  }
  import(){
    alert('import()')
  }

}
