import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
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
import { UpgradeComponent } from '@mm-modules/upgrade/upgrade.component';
import { UpgradeConfirmComponent } from '@mm-modules/upgrade-confirm/upgrade-confirm.component';
import { UsersComponent } from '@mm-modules/users/users.component';
import { ErrorComponent } from '@mm-modules/error/error.component';
import { HomeComponent } from '@mm-modules/home/home.component';

@NgModule({
  declarations: [
    ExportComponent,
    BackupComponent,
    ImagesComponent,
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
    DisplayComponent,
    DisplayDateTimeComponent,
    DisplayLanguagesComponent,
    DisplayPrivacyPoliciesComponent,
    DisplayPrivacyPoliciesPreviewComponent,
    DisplayTranslationsComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ExportComponent,
    BackupComponent,
    ImagesComponent,
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
    SmsComponent,
    SmsFormsComponent,
    SmsSettingsComponent,
    SmsTestComponent,
    TargetsComponent,
    TargetsEditComponent,
    TranslationComponent,
    UpgradeComponent,
    UsersComponent,
    AuthorizationComponent,
    AuthorizationPermissionsComponent,
    AuthorizationRolesComponent,
    DisplayComponent,
    DisplayDateTimeComponent,
    DisplayLanguagesComponent,
    DisplayPrivacyPoliciesComponent,
    DisplayPrivacyPoliciesPreviewComponent,
    DisplayTranslationsComponent,
    HomeComponent,
    ErrorComponent

  ]
})
export class ModulesModule { }
