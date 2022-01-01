import { Component, OnInit } from '@angular/core';
//import { DirectivesModule } from '@mm-directives/directives.module';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styles: [
  ]
})
export class UpgradeComponent implements OnInit {

  //@Input appUnless

  currentDeploy = false;
loading = false;
instance = {upgrade: {no_horti: {detail:'090'}}}
versions= {
  branches:['dev', 'prod', 'test'],
  releases:['dev', 'prod', 'test'],
  betas:['dev', 'prod', 'test']
}
deployDoc = {_deleted:false, action: 'retry', staging_complete:true}
error = 'some error'
condition =false;
releaseText = 'Testing custom release directive!';
upgrade = 'please upgrade'

  constructor() { }

  ngOnInit(): void {
  }

}
