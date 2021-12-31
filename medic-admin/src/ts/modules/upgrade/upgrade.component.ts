import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styles: [
  ]
})
export class UpgradeComponent implements OnInit {

  currentDeploy = false;
loading = false;
instance = {upgrade: {no_horti: {detail:'090'}}}
versions= {
  branches:['dev', 'prod', 'test'],
  releases:['dev', 'prod', 'test'],
  betas:['dev', 'prod', 'test']
}
deployDoc = {_dleteted:false, action: 'retry', staging_complete:true}
error = 'some error'

  constructor() { }

  ngOnInit(): void {
  }

}
