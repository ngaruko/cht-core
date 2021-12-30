import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-languages',
  templateUrl: './display-languages.component.html',
  styles: [
  ]
})
export class DisplayLanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  languagesModel = {default:{locale:'en', outgoing:'en'}}
  localeModel =
  {

    doc:{
      name:'name', code:'09'
    },
  missing:4,
  export:{name :'name', url : 'url'}
}
  status ={msg:'faile', loading:true}
  loading:false

}
