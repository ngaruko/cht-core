import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
// import { SettingsService } from '@mm-services/settings.service';
// import { HeaderTabsService } from '@mm-services/header-tabs.service';
// import { AuthService } from '@mm-services/auth.service';
//import { SessionService } from '@mm-services/session.service';
// import { GlobalActions } from '@mm-actions/global';
// import { Selectors } from '@mm-selectors/index';



@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  @Input() webAppUrl: any;

  showPrivacyPolicy = false;
  replicationStatus: unknown;
  currentTab: unknown;
  unreadCount = {};
  permittedTabs = [];
  title = 'Medic Amin App';

  private globalActions;

  constructor(

    // private settingsService: SettingsService,
    // private headerTabsService: HeaderTabsService,
    // private authService: AuthService,
     //private sessionService: SessionService
  ) {
    //this.globalActions = new GlobalActions(store);
  }

  ngOnInit(): void {
    // this.subscribeToStore();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

logout(){
  //this.sessionService.logout();
  alert('logged out...')
}
}


