import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageAttendanceTabComponent } from './student-average-attendance-tab.component';

describe('StudentAverageAttendanceTabComponent', () => {
  let component: StudentAverageAttendanceTabComponent;
  let fixture: ComponentFixture<StudentAverageAttendanceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageAttendanceTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageAttendanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
