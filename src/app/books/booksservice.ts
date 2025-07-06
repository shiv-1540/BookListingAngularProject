import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Booksservice {

  constructor() { }

  getBooks(){
    return [
    {
      name:"shiv book1 ",
      author:"Author1 ",
      link:"https://m.media-amazon.com/images/I/81m9fP+LIPL._SY466_.jpg",
      amount:700
    },
    {
      name:"Tobo Shiv ",
      author:"Manavi",
      link:"https://m.media-amazon.com/images/I/81eTq+qiEwL._SY466_.jpg",
      amount:800
    }
    ];
    
  }
}
