import { AppComponent } from './app.component';
import { Transition } from '@uirouter/core';
import { DisplayComponent } from '@mm-components/display/display.component';
import { DisplayDateTimeComponent } from '@mm-components/display-date-time/display-date-time.component';
import { DisplayLanguagesComponent } from '@mm-components/display-languages/display-languages.component';
import { AuthorizationPermissionsComponent } from '@mm-components/authorization-permissions/authorization-permissions.component';
import { AuthorizationRolesComponent } from '@mm-components/authorization-roles/authorization-roles.component';
import { BackupComponent } from '@mm-components/backup/backup.component';
import { DisplayPrivacyPoliciesComponent } from '@mm-components/display-privacy-policies/display-privacy-policies.component';
import { DisplayTranslationsComponent } from '@mm-components/display-translations/display-translations.component';
import { ExportContactsComponent } from '@mm-components/export-contacts/export-contacts.component';
import { ExportDhisComponent } from '@mm-components/export-dhis/export-dhis.component';
import { ExportFeedbackComponent } from '@mm-components/export-feedback/export-feedback.component';
import { ExportMessagesComponent } from '@mm-components/export-messages/export-messages.component';
import { ExportReportsComponent } from '@mm-components/export-reports/export-reports.component';
import { FormsXmlComponent } from '@mm-components/forms-xml/forms-xml.component';
import { ImagesBrandingComponent } from '@mm-components/images-branding/images-branding.component';
import { ImagesPartnersComponent } from '@mm-components/images-partners/images-partners.component';
import { ImagesTabsIconsComponent } from '@mm-components/images-tabs-icons/images-tabs-icons.component';
import { MessageQueueComponent } from '@mm-components/message-queue/message-queue.component';
import { SmsFormsComponent } from '@mm-components/sms-forms/sms-forms.component';
import { SmsSettingsComponent } from '@mm-components/sms-settings/sms-settings.component';
import { SmsTestComponent } from '@mm-components/sms-test/sms-test.component';
import { TargetsEditComponent } from '@mm-components/targets-edit/targets-edit.component';
import { TargetsComponent } from '@mm-components/targets/targets.component';
import { UsersComponent } from '@mm-components/users/users.component';
import { ImagesIconsComponent } from '@mm-components/images-icons/images-icons.component';
import { UpgradeComponent } from '@mm-components/upgdrade/upgrade.component';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
 export const appState = {
  name: 'app',
  url: '/admin',
  component: AppComponent,
};

export const displayState = {
	name: 'display',
	url: '/display',
	//templateUrl: 'templates/display.html'
	component: DisplayComponent,
};


export const displayDateTime = {
	name: 'display.date-time',
	url: '/date-time',
	views: {
		tab: {
			component: DisplayDateTimeComponent,
			//templateUrl: 'templates/display_date_time.html'
		}
	}
};

   export const  displayLanguagesState = {
		 name: 'display.languages',
      url: '/languages',
      views: {
        tab: {
          component: DisplayLanguagesComponent,
          templateUrl: 'templates/display_languages.html'
        }
      }
    };
    export const  displayrivacyPoliciesState = { name :'display.privacy-policies',
      url: '/privacy-policies',
      views: {
        tab: {
          component: DisplayPrivacyPoliciesComponent,
          templateUrl: 'templates/display_privacy_policies.html'
        }
      }
    };
    export const  displayTranslationsState = { name :'display.translations',
      url: '/translations',
      views: {
        tab: {
          component: DisplayTranslationsComponent,
          templateUrl: 'templates/display_translations.html'
        }
      }
    };
    export const  backupState = { name :'backup',
      url: '/backup',
      component: BackupComponent,
      templateUrl: 'templates/backup.html'
    };
    export const  usersState = { name :'users',
      url: '/users',
      component: UsersComponent,
      templateUrl: 'templates/users.html'
    };
    export const  exportState = { name :'export',
      url: '/export',
      templateUrl: 'templates/export.html'
    };
    export const  exportMessagesState = { name :'export.messages',
      url: '/messages',
      views: {
        tab: {
          component: ExportMessagesComponent,
          templateUrl: 'templates/export_messages.html'
        }
      }
    };
    export const  exportReportsState = { name :'export.reports',
      url: '/reports',
      views: {
        tab: {
          component: ExportReportsComponent,
          templateUrl: 'templates/export_reports.html'
        }
      }
    };
    export const  exportContactsState = { name :'export.contacts',
      url: '/contacts',
      views: {
        tab: {
          component: ExportContactsComponent,
          templateUrl: 'templates/export_contacts.html'
        }
      }
    };
    export const  exportDhisState = { name :'export.dhis',
      url: '/dhis',
      views: {
        tab: {
          component: ExportDhisComponent,
          templateUrl: 'templates/export_dhis.html'
        }
      }
    };
    export const  exportFeedbackState = { name :'export.feedback',
      url: '/feedback',
      views: {
        tab: {
          component: ExportFeedbackComponent,
          templateUrl: 'templates/export_feedback.html'
        }
      }
    };
    export const  formsXmlState = { name :'forms',
      url: '/forms',
      component: FormsXmlComponent,
      templateUrl: 'templates/forms_xml.html'
    };
    export const  smsState = { name :'sms',
      url: '/sms',
      templateUrl: 'templates/sms.html'
    };
    export const  smsSettingsState = { name :'sms.settings',
      url: '/settings',
      views: {
        tab: {
          component: SmsSettingsComponent,
          templateUrl: 'templates/sms_settings.html'
        }
      }
    };
    export const  smsFormsState = { name :'sms.forms',
      url: '/forms',
      views: {
        tab: {
          component: SmsFormsComponent,
          templateUrl: 'templates/sms_forms.html'
        }
      }
    };
    export const  smsTestState = { name :'sms.test',
      url: '/test',
      views: {
        tab: {
          component: SmsTestComponent,
          templateUrl: 'templates/sms_test.html'
        }
      }
    };
    export const  imagesState = { name :'images',
      url: '/images',
      templateUrl: 'templates/images.html'
    };
    export const  iconsState = { name :'images.icons',
      url: '/icons',
      views: {
        tab: {
          component: ImagesIconsComponent,
          templateUrl: 'templates/images_icons.html'
        }
      }
    };
    export const  imagesBrandingState = { name :'images.branding',
      url: '/branding',
      views: {
        tab: {
          component: ImagesBrandingComponent,
          templateUrl: 'templates/images_branding.html'
        }
      }
    };
    export const  imagesPartnersState = { name :'images.partners',
      url: '/partners',
      views: {
        tab: {
          component: ImagesPartnersComponent,
          templateUrl: 'templates/images_partners.html'
        }
      }
    };
    export const  imagesTabsIconsState = { name :'images.tabs-icons',
      url: '/tabs-icons',
      views: {
        tab: {
          component: ImagesTabsIconsComponent,
          templateUrl: 'templates/images_tabs_icons.html'
        }
      }
    };
    export const  authorizationState = { name :'authorization',
      url: '/authorization',
      templateUrl: 'templates/authorization.html'
    };
    export const  authorizationPermissionsStatesState = { name :'authorization.permissions',
      url: '/permissions',
      views: {
        tab: {
          component: AuthorizationPermissionsComponent,
          templateUrl: 'templates/authorization_permissions.html'
        }
      }
    };
    export const  authorizationRolesState = { name :'authorization.roles',
      url: '/roles',
      views: {
        tab: {
          component: AuthorizationRolesComponent,
          templateUrl: 'templates/authorization_roles.html'
        }
      }
    };
    export const  targetsState = { name :'targets',
      url: '/targets',
      component: TargetsComponent,
      templateUrl: 'templates/targets.html'
    };
    export const  targetEditState = { name :'targets-edit',
      url: '/targets/edit/:id',
      component: TargetsEditComponent,
      templateUrl: 'templates/targets_edit.html',
      params: {
        id: null
      },
    };
    export const  upgradeState = { name :'upgrade',
      url: '/upgrade',
      component: UpgradeComponent,
      templateUrl: 'templates/upgrade.html'
    };
    export const  messageQueueState = { name :'message-queue',
      url: '/message-queue',
      templateUrl: 'templates/message_queue.html',
    };
    export const  messageQueueScheduledState = { name :'message-queue.scheduled',
      url: '/scheduled?page',
      data: {
        tab: 'scheduled'
      },
      views: {
        tab: {
          component: MessageQueueComponent,
          templateUrl: 'templates/message_queue_tab.html'
        }
      }
    };
    export const  messageQueueDueState = { name :'message-queue.due',
      url: '/due?page',
      data: {
        tab: 'due'
      },
      views: {
        tab: {
          component: MessageQueueComponent,
          templateUrl: 'templates/message_queue_tab.html'
        }
      }
    };
    export const  messageQueueMutedFutureState = { name :'message-queue.muted-future',
      url: '/will-not-send?page',
      data: {
        tab: 'muted',
        descending: false
      },
      views: {
        tab: {
          component: MessageQueueComponent,
          templateUrl: 'templates/message_queue_tab.html'
        }
      }
    };
    export const  messageQueueMutedPastState = { name :'message-queue.muted-past',
      url: '/did-not-send?page',
      data: {
        tab: 'muted',
        descending: true
      },
      views: {
        tab: {
          component: MessageQueueComponent,
          templateUrl: 'templates/message_queue_tab.html'
        }
      }
    };

		export const APP_STATES = [displayState,
			displayDateTime,
			displayLanguagesState,
			displayrivacyPoliciesState,
			displayTranslationsState ,
			backupState,
			usersState ,
			exportState,
			exportMessagesState,
			exportReportsState,
			exportContactsState,
			exportDhisState,
			exportFeedbackState,
			formsXmlState,
			smsState ,
			smsSettingsState,
			smsFormsState,
			smsTestState,
			imagesState,
			iconsState,
			imagesBrandingState,
			imagesPartnersState,
			imagesTabsIconsState,
			authorizationState,
			authorizationPermissionsStatesState,
			authorizationRolesState,
			targetsState,
			targetEditState,
			upgradeState,
			messageQueueState ,
			messageQueueScheduledState,
			messageQueueDueState,
			messageQueueMutedFutureState,
			messageQueueMutedPastState
			];