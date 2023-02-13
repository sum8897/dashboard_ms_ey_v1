import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAttendanceSummaryComponent } from './average-attendance.component';

describe('AverageAttendanceComponent', () => {
  let component: AverageAttendanceSummaryComponent;
  let fixture: ComponentFixture<AverageAttendanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageAttendanceSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageAttendanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
