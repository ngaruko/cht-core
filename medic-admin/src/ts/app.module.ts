import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ErrorComponent } from './modules/error/error.component';
import { AuthorizationPermissionsComponent } from '@mm-modules/authorization-permissions/authorization-permissions.component';
import { AuthorizationRolesComponent } from '@mm-modules/authorization-roles/authorization-roles.component';
import { AuthorizationComponent } from '@mm-modules/authorization/authorization.component';
import { BackupComponent } from '@mm-modules/backup/backup.component';
import { DisplayDateTimeComponent } from '@mm-modules/display-date-time/display-date-time.component';
import { DisplayLanguagesComponent } from '@mm-modules/display-languages/display-languages.component';
import { DisplayPrivacyPoliciesPreviewComponent } from '@mm-modules/display-privacy-policies-preview/display-privacy-policies-preview.component';
import { DisplayPrivacyPoliciesComponent } from '@mm-modules/display-privacy-policies/display-privacy-policies.component';
import { DisplayTranslationsComponent } from '@mm-modules/display-translations/display-translations.component';
import { DisplayComponent } from '@mm-modules/display/display.component';
import { ExportContactsComponent } from '@mm-modules/export-contacts/export-contacts.component';
import { ExportDhisComponent } from '@mm-modules/export-dhis/export-dhis.component';
import { ExportFeedbackComponent } from '@mm-modules/export-feedback/export-feedback.component';
import { ExportMessagesComponent } from '@mm-modules/export-messages/export-messages.component';
import { ExportReportsComponent } from '@mm-modules/export-reports/export-reports.component';
import { ExportComponent } from '@mm-modules/export/export.component';
import { FormsXmlComponent } from '@mm-modules/forms-xml/forms-xml.component';
import { HomeComponent } from '@mm-modules/home/home.component';
import { ImagesBrandingComponent } from '@mm-modules/images-branding/images-branding.component';
import { ImagesIconsComponent } from '@mm-modules/images-icons/images-icons.component';
import { ImagesPartnersComponent } from '@mm-modules/images-partners/images-partners.component';
import { ImagesTabsIconsComponent } from '@mm-modules/images-tabs-icons/images-tabs-icons.component';
import { ImagesComponent } from '@mm-modules/images/images.component';
import { ImportTranslationComponent } from '@mm-modules/import-translation/import-translation.component';
import { MessageQueueTabComponent } from '@mm-modules/message-queue-tab/message-queue-tab.component';
import { MessageQueueComponent } from '@mm-modules/message-queue/message-queue.component';
import { SmsFormsComponent } from '@mm-modules/sms-forms/sms-forms.component';
import { SmsSettingsComponent } from '@mm-modules/sms-settings/sms-settings.component';
import { SmsTestComponent } from '@mm-modules/sms-test/sms-test.component';
import { SmsComponent } from '@mm-modules/sms/sms.component';
import { TargetsEditComponent } from '@mm-modules/targets-edit/targets-edit.component';
import { TargetsComponent } from '@mm-modules/targets/targets.component';
import { TranslationComponent } from '@mm-modules/translation/translation.component';
import { UpgradeComponent } from '@mm-modules/upgdrade/upgrade.component';
import { UpgradeConfirmComponent } from '@mm-modules/upgrade-confirm/upgrade-confirm.component';
import { UsersComponent } from '@mm-modules/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExportComponent,
    BackupComponent,
    ImagesComponent,
    ModalComponent,
    ExportContactsComponent,
    ExportDhisComponent,
    ExportFeedbackComponent,
    ExportMessagesComponent,
    ExportReportsComponent,
    FormsXmlComponent,
    ImagesBrandingComponent,
    ImagesIconsComponent,
    ImagesPartnersComponent,
    ImagesTabsIconsComponent,
    ImportTranslationComponent,
    MessageQueueComponent,
    MessageQueueTabComponent,
    PaginationComponent,
    ReleaseComponent,
    SmsComponent,
    SmsFormsComponent,
    SmsSettingsComponent,
    SmsTestComponent,
    TargetsComponent,
    TargetsEditComponent,
    TranslationComponent,
    UpgradeComponent,
    UpgradeConfirmComponent,
    UsersComponent,
    AuthorizationComponent,
    AuthorizationPermissionsComponent,
    AuthorizationRolesComponent,
    DeleteDocConfirmComponent,
    DeleteUserConfirmComponent,
    DisplayComponent,
    DisplayDateTimeComponent,
    DisplayLanguagesComponent,
    DisplayPrivacyPoliciesComponent,
    DisplayPrivacyPoliciesPreviewComponent,
    DisplayTranslationsComponent,
    EditLanguageComponent,
    EditTranslationComponent,
    EditUserComponent,
    MmModalComponent,
    HomeComponent,
    SnackbarComponent,
    ErrorComponent
  ],
  imports: [
    // UIRouterModule.forRoot({
    //   states: APP_STATES,
    //   useHash: true,
    //   initial: { state: 'app' },
    //   config: routerConfigFn,
    // }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
