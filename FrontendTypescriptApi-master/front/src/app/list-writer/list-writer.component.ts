import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WritersService } from '../writers.service';

@Component({
  selector: 'app-list-writer',
  templateUrl: './list-writer.component.html',
  styleUrls: ['./list-writer.component.css'],
})
export class ListWriterComponent {
  constructor(private writerservice: WritersService, private routes: Router) {}
  writers: any;
  ngOnInit(): void {
    this.loadWriter();
  }
  loadWriter() {
    this.writerservice.listWriter().subscribe((data: any) => {
      console.log(data);
      this.writers = data.books;
    });
  }

  delWriter(datas: any) {
    this.writerservice.deleteWriter(datas._id).subscribe((data) => {
      console.log(data);
      this.writers = this.writers.filter((u: any) => u !== datas);
    });
  }
}
