import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BookComponent } from "./books/book/book";
import { BooksModule } from "./books/books-module";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [], // ✅ No components here since they're all standalone
  imports: [BrowserModule, FormsModule ,BooksModule,AppRoutingModule], // ✅ All standalone components go in imports
  bootstrap: [],
})
export class AppModule {};