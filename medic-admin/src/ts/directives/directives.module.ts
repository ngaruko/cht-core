import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseDirective } from './release.directive';

@NgModule({
  declarations: [
    ReleaseDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ReleaseDirective,
  ]
})
export class DirectivesModule { }
