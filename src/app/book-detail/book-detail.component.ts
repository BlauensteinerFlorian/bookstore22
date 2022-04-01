import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book | undefined
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getRating(num: number){
    return new Array(num);
  }

  showBookList(){
    this.showListEvent.emit();
  }

}
