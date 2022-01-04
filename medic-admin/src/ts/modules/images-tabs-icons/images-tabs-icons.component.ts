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
  submitted = true
  submitError = false
  icon = {name:'name'};
  error ='some error';
  loading:false;
  uploading:false;
  submitting:false;
  tab = {defaultIcon:'home', translation:'home', name:0}
  resourceIcon='icon';
  tabsConfig = [{icon:'someicon'}]
  resourceIcons: any = {}
  tabs: any =[{}]
  submit(){
    alert('submit')
  }
}
