import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWriterComponent } from './add-writer/add-writer.component';
import { ListWriterComponent } from './list-writer/list-writer.component';
import { EditWriterComponent } from './edit-writer/edit-writer.component';

@NgModule({
  declarations: [AppComponent, AddWriterComponent, ListWriterComponent, EditWriterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
