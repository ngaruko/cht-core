import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes as homeRoutes } from '@mm-modules/home/home.routes';
import { routes as authorizationRoutes } from '@mm-modules/authorization/authorization.routes';
import { routes as backupRoutes } from '@mm-modules/backup/backup.routes';
import { routes as displayRoutes } from '@mm-modules/display/display.routes';
import { routes as errorRoutes } from '@mm-modules/error/error.routes';
import { routes as exportRoutes } from '@mm-modules/export/export.routes';
import { routes as formsRoutes } from '@mm-modules/forms-xml/forms.routes';
import { routes as imagesRoutes } from '@mm-modules/images/images.routes';
import { routes as messageQueueRoutes } from '@mm-modules/message-queue/message-queue.routes';
import { routes as smsRoutes } from '@mm-modules/sms/sms.routes';
import { routes as targetsRoutes } from '@mm-modules/targets/targets.routes';
import { routes as upgradeRoutes } from '@mm-modules/upgrade/upgrade.routes';
import { routes as usersRoutes } from '@mm-modules/users/users.routes';
import { UsersComponent } from '@mm-modules/users/users.component';
import { HomeComponent } from '@mm-modules/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      ...authorizationRoutes,
      ...backupRoutes,
      ...displayRoutes,
      ...exportRoutes,
      ...formsRoutes,
      ...imagesRoutes,
      ...messageQueueRoutes,
      ...smsRoutes,
      ...targetsRoutes,
      ...upgradeRoutes,
      ...usersRoutes
    ]
  },
  //...errorRoutes,

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


