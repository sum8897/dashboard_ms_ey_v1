import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendanceBignumberMetricsComponent } from './student-attendance-bignumber-metrics.component';

describe('StudentAttendanceBignumberMetricsComponent', () => {
  let component: StudentAttendanceBignumberMetricsComponent;
  let fixture: ComponentFixture<StudentAttendanceBignumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAttendanceBignumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAttendanceBignumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
