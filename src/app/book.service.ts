import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { Book } from './book';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '';
  constructor(private http: HttpClient) {}

getBooks():Observable<Book>{
return this.http.get<Book>(this.apiUrl);
}

  


  //     getBooks():string {
  // this.books=this.apiUrl.
  //     console.warn("Test");
  //     return "this is book service"
  //   }
}
