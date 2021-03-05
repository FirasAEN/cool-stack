import {Action, createReducer, on} from '@ngrx/store';
import * as BooksExplorerActions from './books-explorer.actions';

export const booksStateKey = 'books';

export interface IBooksExplorerState {
  isLoading: boolean;
}

export const initialBooksExplorerState: IBooksExplorerState = {
  isLoading: true,
};

const reducer = createReducer<IBooksExplorerState>(
  initialBooksExplorerState,
  on(BooksExplorerActions.toggleOff, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(BooksExplorerActions.toggleOn, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
);

export function booksExplorerReducer(
  state: IBooksExplorerState,
  action: Action): IBooksExplorerState {
  return reducer(state, action);
}
