import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '@mm-components/users/users.component';
import { BackupComponent } from '@mm-components/backup/backup.component';
import { UpgradeComponent } from '@mm-components/upgdrade/upgrade.component';
import { TargetsComponent } from '@mm-components/targets/targets.component';
import { ImagesComponent } from '@mm-components/images/images.component';
import { HomeComponent } from '@mm-components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent},
  { path: 'images', component: ImagesComponent },
  { path: 'sms', component: UsersComponent},
  { path: 'targets', component: TargetsComponent},
  { path: 'upgrade', component: UpgradeComponent},
  { path: 'backup', component: BackupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


