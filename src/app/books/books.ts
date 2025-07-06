import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book';
import { Book } from '../types/books';
import { Booksservice } from './booksservice';



@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule,BookComponent],
  templateUrl: './books.html',
  styleUrl: './books.css',
  
})

export class BooksComponent implements OnInit {
    // isDisabled : boolean =false;
    books : Book[]=[];

    //  myName : String ="";

  constructor(private bookService: Booksservice){};

  ngOnInit(): void {
    this.books=this.bookService.getBooks();
  }
  // handleOnclick(){
  //   this.isDisabled=true;
  // }
  // handleInput(event :any){
  //   console.log(event.target.value);
  //   this.myName=event.target.value;
  // }

  isShowing :boolean =true;
  // handleToggle(){
  //    this.isShowing=!this.isShowing;
  // }

  Addtocart(book:Book){
    console.log(book);
    this.books.push(book)
  }
}
