import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksExplorerRoutingModule } from './books-explorer-routing.module';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import {NzAntModule} from '../nz-ant/nz-ant.module';


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
  ]
})
export class BooksExplorerModule { }
