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

  constructor() { }

  ngOnInit(): void {
  }

}
