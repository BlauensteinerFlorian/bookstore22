import {Book} from "./book";

export class BookFactory{
  static empty():Book{
    return new Book(0, '', '', [], new Date(), 0, '',
      0,[{id:0, url: '', title:''}], '');
  }

  static formObject(rawBook: any):Book{
    //cast from JSON Object via REST to Book Domain Object
    return new Book(
      rawBook.id,
      rawBook.isbn,
      rawBook.title,
      rawBook.authors,
      typeof (rawBook.published) === 'string' ? new Date(rawBook.published) : rawBook.published,
      rawBook.user_id,
      rawBook.subtitle,
      rawBook.rating,
      rawBook.images,
      rawBook.description
    );
  }
}
