import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentByCategoryTableComponent } from './enrollment-by-category-table.component';

describe('EnrollmentByCategoryTableComponent', () => {
  let component: EnrollmentByCategoryTableComponent;
  let fixture: ComponentFixture<EnrollmentByCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentByCategoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentByCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
