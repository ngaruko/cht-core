import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-icons',
  templateUrl: './images-icons.component.html',
  styles: [
  ]
})
export class ImagesIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  icons = [{name:'name'}];
  error ='some error';
  loading:false;
  uploading:false;
  submitting:false;
  submit(){
    alert('submit')
  }

}
