import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-partners',
  templateUrl: './images-partners.component.html',
  styles: [
  ]
})
export class ImagesPartnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  error = 'error';
  loading:false;
  uploading:false;
  submitting:false;

}
