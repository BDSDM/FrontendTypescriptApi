import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWriterComponent } from './add-writer/add-writer.component';
import { EditWriterComponent } from './edit-writer/edit-writer.component';
import { ListWriterComponent } from './list-writer/list-writer.component';

const routes: Routes = [
  { path: 'add-writer', component: AddWriterComponent },
  { path: 'list-writer', component: ListWriterComponent },
  { path: 'edit-writer/:id', component: EditWriterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
