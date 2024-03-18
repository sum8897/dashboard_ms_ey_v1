import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentByEducationBarchartComponent } from './enrollment-by-education-barchart.component';

describe('EnrollmentByEducationBarchartComponent', () => {
  let component: EnrollmentByEducationBarchartComponent;
  let fixture: ComponentFixture<EnrollmentByEducationBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentByEducationBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentByEducationBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
