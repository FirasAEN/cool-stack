import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzAntModule} from './ui/nz-ant/nz-ant.module';
import {BooksExplorerModule} from './books-explorer/books-explorer.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BooksExplorerModule,
    NzAntModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(
      {
        routerState:  RouterState.Full,
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
