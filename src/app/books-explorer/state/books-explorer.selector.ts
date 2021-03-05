import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as state from './books-explorer.reducer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksExplorerSelector {
  private get state(): Observable<state.IBooksExplorerState> {
    return this.store.pipe(select(store => store[state.booksStateKey]));
  }

  public constructor(private store: Store<any>) {}

  public isLoading(): Observable<boolean> {
    // tslint:disable-next-line:no-shadowed-variable
    return this.state.pipe(map((state) => state.isLoading));
  }
}
