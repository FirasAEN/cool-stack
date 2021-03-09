import { NgModule } from '@angular/core';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {icons} from './icons';


@NgModule({
  declarations: [],
  imports: [
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzIconModule,
  ]
})
export class IconsModule { }
