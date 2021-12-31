import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExportComponent } from './components/export/export.component';
import { BackupComponent } from './components/backup/backup.component';
import { ImagesComponent } from './components/images/images.component';
import { ModalComponent } from './components/modal/modal.component';
import { ExportContactsComponent } from './components/export-contacts/export-contacts.component';
import { ExportDhisComponent } from './components/export-dhis/export-dhis.component';
import { ExportFeedbackComponent } from './components/export-feedback/export-feedback.component';
import { ExportMessagesComponent } from './components/export-messages/export-messages.component';
import { ExportReportsComponent } from './components/export-reports/export-reports.component';
import { FormsXmlComponent } from './components/forms-xml/forms-xml.component';
import { ImagesBrandingComponent } from './components/images-branding/images-branding.component';
import { ImagesIconsComponent } from './components/images-icons/images-icons.component';
import { ImagesPartnersComponent } from './components/images-partners/images-partners.component';
import { ImagesTabsIconsComponent } from './components/images-tabs-icons/images-tabs-icons.component';
import { ImportTranslationComponent } from './components/import-translation/import-translation.component';
import { MessageQueueComponent } from './components/message-queue/message-queue.component';
import { MessageQueueTabComponent } from './components/message-queue-tab/message-queue-tab.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReleaseComponent } from './components/release/release.component';
import { SmsComponent } from './components/sms/sms.component';
import { SmsFormsComponent } from './components/sms-forms/sms-forms.component';
import { SmsSettingsComponent } from './components/sms-settings/sms-settings.component';
import { SmsTestComponent } from './components/sms-test/sms-test.component';
import { TargetsComponent } from './components/targets/targets.component';
import { TargetsEditComponent } from './components/targets-edit/targets-edit.component';
import { TranslationComponent } from './components/translation/translation.component';
import { UpgradeComponent } from './components/upgdrade/upgrade.component';
import { UpgradeConfirmComponent } from './components/upgrade-confirm/upgrade-confirm.component';
import { UsersComponent } from './components/users/users.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthorizationPermissionsComponent } from './components/authorization-permissions/authorization-permissions.component';
import { AuthorizationRolesComponent } from './components/authorization-roles/authorization-roles.component';
import { DeleteDocConfirmComponent } from './components/delete-doc-confirm/delete-doc-confirm.component';
import { DeleteUserConfirmComponent } from './components/delete-user-confirm/delete-user-confirm.component';
import { DisplayComponent } from './components/display/display.component';
import { DisplayDateTimeComponent } from './components/display-date-time/display-date-time.component';
import { DisplayLanguagesComponent } from './components/display-languages/display-languages.component';
import { DisplayPrivacyPoliciesComponent } from './components/display-privacy-policies/display-privacy-policies.component';
import { DisplayPrivacyPoliciesPreviewComponent } from './components/display-privacy-policies-preview/display-privacy-policies-preview.component';
import { DisplayTranslationsComponent } from './components/display-translations/display-translations.component';
import { EditLanguageComponent } from './components/edit-language/edit-language.component';
import { EditTranslationComponent } from './components/edit-translation/edit-translation.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MmModalComponent } from './modals/mm-modal/mm-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { APP_STATES } from './app.states';
//import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';

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
    HomeComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
