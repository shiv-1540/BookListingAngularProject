import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart';
import { Book } from '../types/books';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {
    ngOnInit(): void {};


    constructor(private cartService:CartService){

    }
    addtoCart(book:Book){
      this.cartService.add(book);
    }
    getCart(){
      return this.cartService.cart;
    }
    removeFromCart(book:Book){
       this.cartService.remove(book);
    }
}
