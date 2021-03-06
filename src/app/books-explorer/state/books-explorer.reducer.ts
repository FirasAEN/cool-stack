import {Action, createReducer, on} from '@ngrx/store';
import * as BooksExplorerActions from './books-explorer.actions';
import * as featureState from './books-explorer.state';


const reducer = createReducer<featureState.IBooksExplorerState>(
  featureState.initialBooksExplorerState,
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
  state: featureState.IBooksExplorerState,
  action: Action): featureState.IBooksExplorerState {
  return reducer(state, action);
}
