import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from 'src/Book';
import { BookService} from 'src/Book.service';

@Component({
  selector: 'app-book-settings',
  templateUrl: './book-settings.component.html',
  styleUrls: ['./book-settings.component.css']
})
export class BookSettingsComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    if(this.route.snapshot.paramMap.get('id')){
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookByid(id)
      .subscribe(book => this.book = book);
    }
    else{
      const id:number = 23;
      this.book = {} as Book;
    }
  }

  goBack(): void {
    this.location.back();
  }
  goToList(): void{
    this.router.navigate(['/BookList']);
  }

 save(): void {
  if(this.route.snapshot.paramMap.get('id')){
    this.bookService.updateBook(this.book)
    .subscribe(() => this.goToList());
  }
  else{
    this.bookService.addBook(this.book)
    .subscribe(() => this.goToList());
  }
 }
}
