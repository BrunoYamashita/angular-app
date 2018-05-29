import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../models/user';
import { ErrorHandler } from './error-handler';
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UsersService {

  private usersUrl = `${environment.api}/user`;  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  getUsersByName (title: String): Observable<User[]> {
    const url = `${this.usersUrl}/by-name/${title}`;
    return this.http.get<User[]>(url)    
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }


  addUser (User: User): Observable<User[]> {
    return this.http.post<User[]>(this.usersUrl,User)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  updateUser (User: User, id: String): Observable<User[]> {
    return this.http.put<User[]>(this.usersUrl,User)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

  deleteUser (id: String): Observable<User[]> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User[]>(this.usersUrl)
    .pipe(
      catchError(ErrorHandler.handleError)
    );
  }

}