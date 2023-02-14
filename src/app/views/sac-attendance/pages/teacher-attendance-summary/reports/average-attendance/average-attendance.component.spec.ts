import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageAttendanceComponent } from './average-attendance.component';

describe('AverageAttendanceComponent', () => {
  let component: AverageAttendanceComponent;
  let fixture: ComponentFixture<AverageAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
