import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSafetyFirstTableComponent } from './school-safety-first-table.component';

describe('SchoolSafetyFirstTableComponent', () => {
  let component: SchoolSafetyFirstTableComponent;
  let fixture: ComponentFixture<SchoolSafetyFirstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSafetyFirstTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSafetyFirstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
