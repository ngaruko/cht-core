import {Routes} from '@angular/router';
import { ExportComponent } from './export.component';

export const routes:Routes = [
  {
    path: 'export',
    component: ExportComponent,
    children: [
      {
        path: 'messages',
        component: ExportComponent
      },
      {
        path: 'reports',
        component: ExportComponent
      },
      {
        path: 'contacts',
        component: ExportComponent
      },
      {
        path: 'feedback',
        component: ExportComponent
      },
      {
        path: 'dhis',
        component: ExportComponent
      }
    ]

  }
];