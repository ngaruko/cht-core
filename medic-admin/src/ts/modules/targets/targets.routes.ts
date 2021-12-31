import {Routes} from '@angular/router';
import { TargetsEditComponent } from '@mm-modules/targets-edit/targets-edit.component';
import { TargetsComponent } from './targets.component';

export const routes:Routes = [
  {
    path: 'targets',
    component: TargetsComponent,
    children: [
      {
        path: 'edit',
        component: TargetsEditComponent
      }
    ]
  }
];