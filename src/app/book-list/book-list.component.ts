import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book, Author, Image} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bs:BookStoreService) { }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }

  ngOnInit(): void {
    this.books = this.bs.getAll();
  }

}
