import * as rootState from '../../state';
import {BooksListEntity} from '../components/books/books-list.entity';

export interface AppState extends rootState.AppState {
  books: IBooksExplorerState;
}

export const booksStateKey = 'books';

export interface IBooksExplorerState {
  items: BooksListEntity;
}

export const initialBooksExplorerState: IBooksExplorerState = {
  items: BooksListEntity.default(),
};
