import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'users', component: UsersComponent},
  // { path: 'images', component: ImagesComponent },
  // { path: 'sms', component: UsersComponent},
  // { path: 'targets', component: TargetsComponent},
  // { path: 'upgrade', component: UpgradeComponent},
  // { path: 'backup', component: BackupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


