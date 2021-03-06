import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as featureState from './books-explorer.state';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksExplorerSelector {
  private get state(): Observable<featureState.IBooksExplorerState> {
    return this.store.pipe(select(store => store[featureState.booksStateKey]));
  }

  public constructor(private store: Store<any>) {}

  public isLoading(): Observable<boolean> {
    // tslint:disable-next-line:no-shadowed-variable
    return this.state.pipe(map((state) => state.items.isLoading));
  }
}
