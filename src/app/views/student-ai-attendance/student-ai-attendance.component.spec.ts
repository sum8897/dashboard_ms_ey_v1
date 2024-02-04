import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAiAttendanceComponent } from './student-ai-attendance.component';

describe('StudentAiAttendanceComponent', () => {
  let component: StudentAiAttendanceComponent;
  let fixture: ComponentFixture<StudentAiAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAiAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAiAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
