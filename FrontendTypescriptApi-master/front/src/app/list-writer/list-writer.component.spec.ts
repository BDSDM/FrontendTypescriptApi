import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWriterComponent } from './list-writer.component';

describe('ListWriterComponent', () => {
  let component: ListWriterComponent;
  let fixture: ComponentFixture<ListWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
