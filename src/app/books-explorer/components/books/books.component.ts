import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, BooksExplorerSelector, IBooksExplorerState} from '../../state';
import {delay, filter, map, startWith, tap} from 'rxjs/operators';
import * as BooksExplorerActions from '../../state';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';

export interface ITest {
  isLoading: boolean;
}

@Component({
  selector: 'aln-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public readonly vo$: Observable<{
    isLoading: boolean;
  }>;
  private isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private booksExplorerSelector: BooksExplorerSelector) {
    of(null).pipe(delay(2000)).subscribe(() => {
      this.store.dispatch(BooksExplorerActions.toggleOff());
    });
    of(null).pipe(delay(5000)).subscribe(() => {
      this.store.dispatch(BooksExplorerActions.toggleOn());
    });

    this.isLoading$ = this.booksExplorerSelector.isLoading();

    this.vo$ = combineLatest([this.isLoading$]).pipe(
      map(([isLoading]) => {
        return {
          isLoading,
        };
      }),
    );
  }

  ngOnInit(): void {
  }

}
