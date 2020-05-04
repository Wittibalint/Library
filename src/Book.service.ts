import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './Book';


@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'api/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

  getBook (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe();
  }
  getBookByid(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
    );
  }

  getBookNo404<Data>(id: number): Observable<Book> {
    const url = `${this.booksUrl}/?id=${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]));
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe();
  }

  deletebook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, this.httpOptions).pipe();
  }

  updateBook (Book: Book): Observable<any> {
    return this.http.put(this.booksUrl, Book, this.httpOptions).pipe();
  }

}