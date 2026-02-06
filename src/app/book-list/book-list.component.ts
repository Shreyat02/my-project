import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books:Book[]=[{id:1,title:'my book',auther:'test'},
    {id:2,title:'book2',auther:'test'},
    {id:2,title:'book3',auther:'test'}
  ];
  result :any;
  booksdetail:any;
  constructor(private bookservice: BookService){
// this.bookservice.getBooks().subscribe(
//   res=>{
//     this.booksdetail=res;
//   }
// );
// console.log(this.result);
  }
  //bookTitle: string= "My Book";
  

  






}
