import { Component } from '@angular/core';
import {Book} from "./shared/book";

@Component({
  selector: 'bs-root',
  /*templateUrl: './app.component.html',*/
  template: '<bs-book-list></bs-book-list>',
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book | undefined;

  showList(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book){
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
