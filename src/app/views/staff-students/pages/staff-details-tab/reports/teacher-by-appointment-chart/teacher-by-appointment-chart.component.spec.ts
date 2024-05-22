import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByAppointmentChartComponent } from './teacher-by-appointment-chart.component';

describe('TeacherByAppointmentChartComponent', () => {
  let component: TeacherByAppointmentChartComponent;
  let fixture: ComponentFixture<TeacherByAppointmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByAppointmentChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByAppointmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
