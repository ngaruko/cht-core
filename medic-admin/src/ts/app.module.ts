import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from '@mm-modules/modules.module';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReleaseComponent } from './components/release/release.component';
import { DeleteDocConfirmComponent } from './components/delete-doc-confirm/delete-doc-confirm.component';
import { DeleteUserConfirmComponent } from './components/delete-user-confirm/delete-user-confirm.component';
import { EditLanguageComponent } from './components/edit-language/edit-language.component';
import { EditTranslationComponent } from './components/edit-translation/edit-translation.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MmModalComponent } from './modals/mm-modal/mm-modal.component';
import { HttpClientModule } from '@angular/common/http';
//import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ComponentsModule } from '@mm-components/components.module';
import { DirectivesModule } from '@mm-directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    //RouterModule,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ModulesModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule,
    BrowserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
