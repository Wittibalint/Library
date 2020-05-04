import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from 'src/Book';
import { BookService} from 'src/Book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookByid(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
  delete(hero: Book): void {
    if(confirm("Are you sure to delete "+this.book.name+"?")) {
      this.bookService.deletebook(hero).subscribe();
      this.location.back();
    }
    
  }
 }
