import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WritersService {
  constructor(private http: HttpClient) {}
  addWriter(writer: any) {
    return this.http.post('http://localhost:3000/books/create', writer);
  }
  listWriter() {
    return this.http.get('http://localhost:3000/books/get');
  }
  deleteWriter(id: any) {
    return this.http.delete('http://localhost:3000/books/delete/' + id);
  }
  updateWriter(id: any, writer: any) {
    return this.http.patch('http://localhost:3000/books/update/' + id, writer);
  }
  singleWriter(id: any): any {
    return this.http.get('http://localhost:3000/books/get/' + id);
  }
}
