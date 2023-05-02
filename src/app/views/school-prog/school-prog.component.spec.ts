import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProgComponent } from './school-prog.component';

describe('SchoolProgComponent', () => {
  let component: SchoolProgComponent;
  let fixture: ComponentFixture<SchoolProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
