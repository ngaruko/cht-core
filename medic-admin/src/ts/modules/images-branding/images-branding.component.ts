import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-branding',
  templateUrl: './images-branding.component.html',
  styles: [
  ]
})
export class ImagesBrandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  error = 'some error';
  favicon ={content_type:'png', data:'some data'};
  loading:false;
  uploading:false;
  submitting:false;
  submit(){
    alert('submit')
  }

}
