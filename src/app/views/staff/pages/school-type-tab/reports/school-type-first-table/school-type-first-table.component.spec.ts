import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeFirstTableComponent } from './school-type-first-table.component';

describe('SchoolTypeFirstTableComponent', () => {
  let component: SchoolTypeFirstTableComponent;
  let fixture: ComponentFixture<SchoolTypeFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTypeFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTypeFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
