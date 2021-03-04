import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzAntModule} from './nz-ant/nz-ant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzAntModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
