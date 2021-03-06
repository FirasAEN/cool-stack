import {Action, createReducer, on} from '@ngrx/store';
import * as BooksExplorerActions from './books-explorer.actions';
import * as rootState from '../../state';
import {BooksListEntity} from '../books/books-list.entity';

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

const reducer = createReducer<IBooksExplorerState>(
  initialBooksExplorerState,
  on(BooksExplorerActions.toggleOff, (state) => {
    return {
      ...state,
      items: state.items.setLoading(false),
    };
  }),
  on(BooksExplorerActions.toggleOn, (state) => {
    return {
      ...state,
      items: state.items.setLoading(true),
    };
  }),
);

export function booksExplorerReducer(
  state: IBooksExplorerState,
  action: Action): IBooksExplorerState {
  return reducer(state, action);
}
