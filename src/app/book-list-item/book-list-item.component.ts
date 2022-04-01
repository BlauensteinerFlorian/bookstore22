import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'a.bs-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: [
  ]
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book | undefined
  @Output() myEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  myClickHandler(){
    console.log("Test");
  }
}
