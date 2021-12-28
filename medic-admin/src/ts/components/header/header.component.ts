import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  webAppUrl = 'http://localhost:5984';

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    console.log('logging out!')// sessionservice.logout()
  }

}
