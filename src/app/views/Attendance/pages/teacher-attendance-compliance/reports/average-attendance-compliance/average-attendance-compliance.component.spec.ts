import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAttendanceComplianceComponent } from './average-attendance-compliance.component';

describe('AverageAttendanceComplianceComponent', () => {
  let component: AverageAttendanceComplianceComponent;
  let fixture: ComponentFixture<AverageAttendanceComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageAttendanceComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageAttendanceComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
