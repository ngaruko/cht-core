import {Routes} from '@angular/router';
import { DisplayDateTimeComponent } from '@mm-modules/display-date-time/display-date-time.component';
import { DisplayLanguagesComponent } from '@mm-modules/display-languages/display-languages.component';
import { DisplayPrivacyPoliciesComponent } from '@mm-modules/display-privacy-policies/display-privacy-policies.component';
import { DisplayTranslationsComponent } from '@mm-modules/display-translations/display-translations.component';
import { DisplayComponent } from './display.component';

export const routes:Routes = [
  {
    path: 'display',
    component: DisplayComponent,
    children: [
      {
        path: 'date-time',
        component: DisplayDateTimeComponent
      },
      {
        path: 'languages',
        component: DisplayLanguagesComponent
      },
      {
        path: 'translations',
        component: DisplayTranslationsComponent
      },
      {
        path: 'privacy-policies',
        component: DisplayPrivacyPoliciesComponent
      }
    ]

  }
];