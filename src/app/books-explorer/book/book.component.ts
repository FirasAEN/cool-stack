import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aln-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public isLoading = true;
  constructor() { }

  ngOnInit(): void {
  }

}
