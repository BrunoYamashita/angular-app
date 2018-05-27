import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Book } from '../models/book';
import { ErrorHandler } from './error-handler';
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BooksService {

  private booksUrl = `${environment.api}/book`;  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET books from the server */
  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl,httpOptions)
    .pipe(
      tap(book=>console.log(book)),
      catchError(ErrorHandler.handleError)
    );
  }

  getBooksByTitle (title: String): Observable<Book[]> {
    const url = `${this.booksUrl}/by-title/${title}`;
    return this.http.get<Book[]>(url)    
    .pipe(
      tap(book=>console.log(book)),
      catchError(ErrorHandler.handleError)
    );
  }

  getBooksByAuthor (name: String): Observable<Book[]> {
    const url = `${this.booksUrl}/by-author/${name}`;
    return this.http.get<Book[]>(url)    
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  addBook (book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(this.booksUrl,book)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  updateBook (book: Book, id: String): Observable<Book[]> {
    return this.http.put<Book[]>(this.booksUrl,book)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  deleteBook (id: String): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book[]>(this.booksUrl)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

}