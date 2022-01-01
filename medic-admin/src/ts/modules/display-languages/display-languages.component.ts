import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-languages',
  templateUrl: './display-languages.component.html',
  styles: [
  ]
})
export class DisplayLanguagesComponent implements OnInit {

  constructor() { }
  key ='transl-key'

  ngOnInit(): void {
  }
  //localeModel.doc.enabled
  languagesModel = {default:{locale:'en', outgoing:'en'}}
  localeModel =
  {

    doc:{
      name:'English', code:'en', enabled:true
    },
  missing:4,
  export:{name :'name', url : 'url'}
}
  status ={msg:'faile', loading:true, success:true, error :'error'}
  loading:false
  deleteDoc(local){
    alert('delete doc' + local.name)
  }

  enableLanguage(local){
    alert('enable lang' + local.name)
  }
  disableLanguage(local){
    alert('enable lang' + local.name)
  }

  // editLanguage(){
  //   alert('edit lang' )
  // }
  prepareImport(doc){
    alert('prepareImport lang' + doc )
  }
  editLanguage(doc:any={name:'English', code:'en'}){
    alert('edit lang' + doc )
  }
  // editTranslation(){
  //   alert('editTranslation()')
  // }
  editTranslation(key:string='nonegiven'){
    alert('editTranslation()' + key)
  }

  submitLanguageSettings(){
    alert('submitLanguageSettings()')
  }


}
