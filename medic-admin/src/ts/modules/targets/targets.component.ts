import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styles: [
  ]
})
export class TargetsComponent implements OnInit {

  constructor() { }
  enable(){
    alert('enabled')
  }

  disable(){
    alert('disabled')
  }

  target = {id: 'some-id', translation_key:'some key', name:'some name', goal:3, type:'sometime'}
  loading = false;
  error = false
  configuration = {enabled:true}
  edit(key){
    alert('editing' + key)}

  ngOnInit(): void {
  }

}
