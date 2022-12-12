import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WritersService } from '../writers.service';

@Component({
  selector: 'app-add-writer',
  templateUrl: './add-writer.component.html',
  styleUrls: ['./add-writer.component.css'],
})
export class AddWriterComponent {
  addWriter: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private authorservice: WritersService
  ) {
    this.addWriter = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onAdd() {
    console.log(this.addWriter.value);
    this.authorservice
      .addWriter(this.addWriter.value)
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/list-writer']);
      });
  }
}
