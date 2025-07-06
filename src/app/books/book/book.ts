import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../types/books';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrls: ['./book.css'] // ✅ FIXED
})
export class BookComponent implements OnInit {  // ✅ Rename Book1 → BookComponent
  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart:boolean=false;

  constructor(private cartService:CartService ){

  }

  ngOnInit(): void {}

  Addtocart() {
    // this.bookEmitter.emit(this.book); // ✅ If you want to send back to parent
    this.isInCart=true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
 
}
