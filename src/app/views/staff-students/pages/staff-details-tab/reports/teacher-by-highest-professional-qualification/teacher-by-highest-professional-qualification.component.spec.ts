import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByHighestProfessionalQualificationComponent } from './teacher-by-highest-professional-qualification.component';

describe('TeacherByHighestProfessionalQualificationComponent', () => {
  let component: TeacherByHighestProfessionalQualificationComponent;
  let fixture: ComponentFixture<TeacherByHighestProfessionalQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByHighestProfessionalQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByHighestProfessionalQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
