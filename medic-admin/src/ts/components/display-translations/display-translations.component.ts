import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-translations',
  templateUrl: './display-translations.component.html',
  styles: [
  ]
})
export class DisplayTranslationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  translation = {
    key:'keys',
    lhs:'lhs',
    rhs:'rhs'
  }

  translationModels:true

}
