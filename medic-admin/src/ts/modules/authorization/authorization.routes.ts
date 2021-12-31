import { Routes } from '@angular/router';
import { AuthorizationPermissionsComponent } from '@mm-modules/authorization-permissions/authorization-permissions.component';
import { AuthorizationRolesComponent } from '@mm-modules/authorization-roles/authorization-roles.component';
import { AuthorizationComponent } from './authorization.component';

export const routes: Routes = [
  {
    path: 'authorization',
    component: AuthorizationComponent,
    children: [
      {
        path: 'permissions',
        component: AuthorizationPermissionsComponent
      },
      {
        path: 'roles',
        component: AuthorizationRolesComponent
      }
    ]

  }
];