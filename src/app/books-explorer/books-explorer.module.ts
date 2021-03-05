import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksExplorerRoutingModule } from './books-explorer-routing.module';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import {NzAntModule} from '../nz-ant/nz-ant.module';
import {StoreModule} from '@ngrx/store';
import * as state from './state';


@NgModule({
  declarations: [BookComponent, BooksComponent],
  exports: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    NzAntModule,
    BooksExplorerRoutingModule,
    FormsModule,
    StoreModule.forFeature(
        state.booksStateKey,
        state.booksExplorerReducer,
      ),
  ]
})
export class BooksExplorerModule { }
