import {Routes} from '@angular/router';
import { SmsFormsComponent } from '@mm-modules/sms-forms/sms-forms.component';
import { SmsSettingsComponent } from '@mm-modules/sms-settings/sms-settings.component';
import { SmsTestComponent } from '@mm-modules/sms-test/sms-test.component';
import { SmsComponent } from './sms.component';

export const routes:Routes = [
  {
    path: 'sms',
    component: SmsComponent,
    children: [
      {
        path: 'settings',
        component: SmsSettingsComponent
      },
      {
        path: 'forms',
        component: SmsFormsComponent
      },
      {
        path: 'test',
        component: SmsTestComponent
      }
    ]

  }
];