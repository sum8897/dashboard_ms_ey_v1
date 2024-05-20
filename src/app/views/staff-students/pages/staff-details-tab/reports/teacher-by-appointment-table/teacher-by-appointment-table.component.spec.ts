import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByAppointmentTableComponent } from './teacher-by-appointment-table.component';

describe('TeacherByAppointmentTableComponent', () => {
  let component: TeacherByAppointmentTableComponent;
  let fixture: ComponentFixture<TeacherByAppointmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByAppointmentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByAppointmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
