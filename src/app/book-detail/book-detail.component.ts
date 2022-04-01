import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  book:Book | undefined;

  constructor(private bs:BookStoreService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params['isbn']);
  }

  getRating(num: number){
    return new Array(num);
  }

}
