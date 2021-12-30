import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-tabs-icons',
  templateUrl: './images-tabs-icons.component.html',
  styles: [
  ]
})
export class ImagesTabsIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  icon = {name:'name'};
  error ='some error';
  loading:false;
  uploading:false;
  submitting:false;
}
