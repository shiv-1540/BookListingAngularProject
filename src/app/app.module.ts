import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { LandComponent } from './land/land.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CartComponent, LandComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule,ReactiveFormsModule,FormsModule],
  bootstrap: [AppComponent],

})
export class AppModule {}
