import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent }   from 'src/app/book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCardComponent } from './book-card/book-card.component';
import {BookSettingsComponent} from 'src/app/book-settings/book-settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/BookList', pathMatch: 'full' },
  { path: 'BookList', component: BookListComponent },
  { path: 'Book/new', component:BookSettingsComponent},
  { path: 'Book/:id', component:BookDetailsComponent},
  { path: 'BookCard', component:BookCardComponent},
  { path: 'Book/:id/edit', component:BookSettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
