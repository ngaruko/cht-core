import {Routes} from '@angular/router';
import { MessageQueueTabComponent } from './message-queue-tab.component';
import { MessageQueueComponent } from './message-queue.component';

export const routes:Routes = [
  {
    path: 'message-queue',
    component: MessageQueueComponent,
    children: [
      {
        path: 'scheduled',
        component: MessageQueueTabComponent
      },
      {
        path: 'due',
        component: MessageQueueTabComponent
      },
      {
        path: 'will-not-send',
        component: MessageQueueTabComponent
      },
      {
        path: 'did-not-send',
        component: MessageQueueComponent
      }
    ]

  }
];