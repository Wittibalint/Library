import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Book';
import{BookService} from 'src/Book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[];
  
    constructor(private bookService: BookService) { }
  
    ngOnInit() {
      this.getBooks();
    }
  
    getBooks(): void {
      this.bookService.getBook()
      .subscribe(books => this.books = books);
    }
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.bookService.addBook({ name } as Book)
        .subscribe(hero => {
          this.books.push(hero);
        });
    }
  
    delete(hero: Book): void {
      this.books = this.books.filter(h => h !== hero);
      this.bookService.deletebook(hero).subscribe();
    }
  
  }
