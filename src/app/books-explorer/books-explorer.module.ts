import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksExplorerRoutingModule } from './books-explorer-routing.module';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [BookComponent, BooksComponent],
  exports: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    BooksExplorerRoutingModule
  ]
})
export class BooksExplorerModule { }
