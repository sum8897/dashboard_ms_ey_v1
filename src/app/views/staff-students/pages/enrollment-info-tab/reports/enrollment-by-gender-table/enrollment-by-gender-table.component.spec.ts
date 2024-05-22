import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentByGenderTableComponent } from './enrollment-by-gender-table.component';

describe('EnrollmentByGenderTableComponent', () => {
  let component: EnrollmentByGenderTableComponent;
  let fixture: ComponentFixture<EnrollmentByGenderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentByGenderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentByGenderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
