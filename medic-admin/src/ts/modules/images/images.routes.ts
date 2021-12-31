import {Routes} from '@angular/router';
import { ImagesBrandingComponent } from '@mm-modules/images-branding/images-branding.component';
import { ImagesIconsComponent } from '@mm-modules/images-icons/images-icons.component';
import { ImagesPartnersComponent } from '@mm-modules/images-partners/images-partners.component';
import { ImagesTabsIconsComponent } from '@mm-modules/images-tabs-icons/images-tabs-icons.component';
import { ImagesComponent } from './images.component';

export const routes:Routes = [
  {
    path: 'images',
    component: ImagesComponent,
    children: [
      {
        path: 'icons',
        component: ImagesIconsComponent
      },
      {
        path: 'branding',
        component: ImagesBrandingComponent
      },
      {
        path: 'partners',
        component: ImagesPartnersComponent
      },
      {
        path: 'tabs-icons',
        component: ImagesTabsIconsComponent
      }
    ]

  }
];