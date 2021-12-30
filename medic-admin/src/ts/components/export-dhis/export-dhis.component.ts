import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-dhis',
  templateUrl: './export-dhis.component.html',
  styles: [
  ]
})
export class ExportDhisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  option ={ translation_key: 'some-key', name:'name', description:'desc', timestamp:'time', id: 3};
dataSets =[2, 7]
}
