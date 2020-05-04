import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import{BookService} from 'src/Book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  books: Book[];
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBook()
    .subscribe(books => this.books = books);
  }
}
