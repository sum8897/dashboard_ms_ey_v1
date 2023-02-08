import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SACStudentsAttendanceComplianceComponent } from './sac-students-attendance-compliance.component';

describe('SACStudentsAttendanceComplianceComponent', () => {
  let component: SACStudentsAttendanceComplianceComponent;
  let fixture: ComponentFixture<SACStudentsAttendanceComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SACStudentsAttendanceComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SACStudentsAttendanceComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
