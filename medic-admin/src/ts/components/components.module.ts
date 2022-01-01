import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '@mm-components/header/header.component';
import { DirectivesModule } from '@mm-directives/directives.module';
import { SnackbarComponent } from '@mm-components/snackbar/snackbar.component';
import { DeleteDocConfirmComponent } from '@mm-components/delete-doc-confirm/delete-doc-confirm.component';
import { DeleteUserConfirmComponent } from '@mm-components/delete-user-confirm/delete-user-confirm.component';
import { EditLanguageComponent } from '@mm-components/edit-language/edit-language.component';
import { EditTranslationComponent } from '@mm-components/edit-translation/edit-translation.component';
import { EditUserComponent } from '@mm-components/edit-user/edit-user.component';
import { ModalComponent } from '@mm-components/modal/modal.component';
import { PaginationComponent } from '@mm-components/pagination/pagination.component';
import { ReleaseComponent } from '@mm-components/release/release.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    PaginationComponent,
    ReleaseComponent,
    DeleteDocConfirmComponent,
    DeleteUserConfirmComponent,
    EditLanguageComponent,
    EditTranslationComponent,
    EditUserComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DirectivesModule,
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    PaginationComponent,
    ReleaseComponent,
    DeleteDocConfirmComponent,
    DeleteUserConfirmComponent,
    EditLanguageComponent,
    EditTranslationComponent,
    EditUserComponent,
    SnackbarComponent
  ]
})
export class ComponentsModule { }
