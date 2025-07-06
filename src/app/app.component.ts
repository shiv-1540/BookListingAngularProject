import { Component } from '@angular/core';
import { BooksComponent } from "./books/books";
import { CartComponent } from "./cart/cart";

// import { RouterOutlet } from '@angular/router';

@Component({
   selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BooksComponent, CartComponent],
})

export class AppComponent {
  protected title = 'BookBooking';
}
