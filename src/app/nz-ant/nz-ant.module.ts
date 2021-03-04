import { NgModule } from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzSpinModule} from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [],
  imports: [
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    NzGridModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzSpinModule,
  ],
  exports: [
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    NzGridModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzSpinModule,
  ],
})
export class NzAntModule { }
