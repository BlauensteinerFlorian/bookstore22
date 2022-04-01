import { Injectable } from '@angular/core';
import {Author, Book, Image} from "./book";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'http://bookstore22.s1910456001.student.kwmhgb.at/api';

  constructor(private httpClient: HttpClient) {
  }
  getAll():Observable<Array<Book>>{
    return this.httpClient.get<Array<Book>>(
      `${this.api}/books`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(isbn: string):Observable<Book>{
    return this.httpClient.get<Book>(
      `${this.api}/books/${isbn}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  create(book:Book):Observable<any>{
    return this.httpClient.post(`${this.api}/books`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(book:Book):Observable<any>{
    return this.httpClient.put(`${this.api}/books/${book.isbn}`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(isbn:string):Observable<any>{
    return this.httpClient.delete(`${this.api}/books/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(error);
  }
}
