import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByAppointmentComponent } from './teacher-by-appointment.component';

describe('TeacherByAppointmentComponent', () => {
  let component: TeacherByAppointmentComponent;
  let fixture: ComponentFixture<TeacherByAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
