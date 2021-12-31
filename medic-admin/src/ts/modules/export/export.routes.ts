import {Routes} from '@angular/router';
import { ExportContactsComponent } from '@mm-modules/export-contacts/export-contacts.component';
import { ExportDhisComponent } from '@mm-modules/export-dhis/export-dhis.component';
import { ExportFeedbackComponent } from '@mm-modules/export-feedback/export-feedback.component';
import { ExportMessagesComponent } from '@mm-modules/export-messages/export-messages.component';
import { ExportReportsComponent } from '@mm-modules/export-reports/export-reports.component';
import { ExportComponent } from './export.component';

export const routes:Routes = [
  {
    path: 'export',
    component: ExportComponent,
    children: [
      {
        path: 'messages',
        component: ExportMessagesComponent
      },
      {
        path: 'reports',
        component: ExportReportsComponent
      },
      {
        path: 'contacts',
        component: ExportContactsComponent
      },
      {
        path: 'feedback',
        component: ExportFeedbackComponent
      },
      {
        path: 'dhis',
        component: ExportDhisComponent
      }
    ]

  }
];