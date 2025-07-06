import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BooksComponent } from './books';
import { BookComponent } from './book/book';
import { Booksservice } from './booksservice';

@NgModule({
  declarations: [],
  providers:[Booksservice],
  imports: [
    CommonModule,BooksComponent,BookComponent
  ]
})
export class BooksModule { };
