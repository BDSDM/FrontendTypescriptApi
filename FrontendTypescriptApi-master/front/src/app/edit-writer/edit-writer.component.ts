import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WritersService } from '../writers.service';

@Component({
  selector: 'app-edit-writer',
  templateUrl: './edit-writer.component.html',
  styleUrls: ['./edit-writer.component.css'],
})
export class EditWriterComponent {
  addWriter: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private writerservice: WritersService,
    private url: ActivatedRoute
  ) {
    this.addWriter = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.writerservice.singleWriter(this.id).subscribe((data: any) => {
      this.addWriter.patchValue({
        title: data.book.title,
        author: data.book.author,
      });
    });
  }

  onSubmit() {
    console.log(this.addWriter);
    this.writerservice
      .updateWriter(this.id, this.addWriter.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/list-writer']);
      });
  }
}
