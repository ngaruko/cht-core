import { Component, OnInit } from '@angular/core';
//import { SessionService } from '@mm-services/session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  //private globalActions;

  title: string;
  webAppUrl: string;

  constructor (
    //private sessionService:SessionService,
    // private resourceIconsService:ResourceIconsService,
    // private locationService:LocationService,
    // private formatDateService:FormatDateService,
  ) {
    //this.globalActions = new GlobalActions(store);
    //this.analyticsActions = new AnalyticsActions(store);

    this.webAppUrl = 'http://localhost:5988/messages';
    this.title ='Admon Web app';
  }





  ngOnInit(): void {
    //this.globalActions.setIsAdmin(this.sessionService.isAdmin())
    //this.setAppTitle();
  }

  logout() {
    //this.sessionService.logout();
   console.log('I am out...')
  }
}
