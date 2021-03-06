import {Component, OnInit} from '@angular/core';
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

  constructor(private bs:BookStoreService) { }


  ngOnInit(): void {
    this.bs.getAll().subscribe(res => this.books = res);
  }

}
