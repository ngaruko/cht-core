import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styles: [
  ]
})
export class ReleaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  release = '1.23'
  buildVersion = '12.12'

}
