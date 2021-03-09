import { NgModule } from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {IconsModule} from '../ui/icons/icons.module';
import {NzMenuModule} from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [],
  imports: [
    IconsModule,
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    NzGridModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzSpinModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
  ],
  exports: [
    IconsModule,
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    NzGridModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzSpinModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
  ],
})
export class NzAntModule { }
