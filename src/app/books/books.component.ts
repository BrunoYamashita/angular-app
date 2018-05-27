import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import { Observable } from "rxjs";

import { BooksService } from "../services/books.service";
import { Book } from '../models/book';


@Component({
  selector: 'st-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  books: Book[];

  searchForm: FormGroup
  searchControl: FormControl
  searchBarTitle : boolean = false 
  searchBarAuthor : boolean = false 
  message : String 
  constructor(private bookService: BooksService,private fb: FormBuilder) { }
  
  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
  }
  find(){
    this.bookService.getBooks().subscribe(books => this.books = books)
  }

  findByTitle(title: String){
    this.bookService.getBooksByTitle(title).subscribe(books => {
      this.books = books;
      this.message ='';
    }, 
    error =>{
      this.message = error,this.books = []
    })
  }

  findByAuthor(name: String){
    this.bookService.getBooksByAuthor(name).subscribe(books => {
      this.books = books;
      this.message ='';
    },
    error =>{
      this.message = error,this.books = []
    })
  }

  toggleSearchBook(){
    if(this.searchBarAuthor)
        this.searchBarAuthor = false
    this.searchBarTitle = !this.searchBarTitle
    this.clear();
  }

  toggleSearchAuthor(){
    if(this.searchBarTitle)
        this.searchBarTitle = false;
    this.searchBarAuthor = !this.searchBarAuthor
    this.clear()
  }
  onSubmit(type:String) {
    const formModel = this.searchForm.value;
    type == 'book' 
      ? this.findByTitle(formModel.searchControl)
      : this.findByAuthor(formModel.searchControl)
  }

  clear(){
    this.message= '';
    this.searchControl.setValue('')
  }
}
