import { NgModule } from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {ngZorroIcons} from './ng-zorro.icons';


@NgModule({
  declarations: [],
  imports: [
    NzIconModule.forRoot(ngZorroIcons),
  ],
  exports: [
    NzIconModule,
  ]
})
export class IconsModule { }
