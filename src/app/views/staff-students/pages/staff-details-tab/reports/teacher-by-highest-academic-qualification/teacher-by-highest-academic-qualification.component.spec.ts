import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherByHighestAcademicQualificationComponent } from './teacher-by-highest-academic-qualification.component';

describe('TeacherByHighestAcademicQualificationComponent', () => {
  let component: TeacherByHighestAcademicQualificationComponent;
  let fixture: ComponentFixture<TeacherByHighestAcademicQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherByHighestAcademicQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherByHighestAcademicQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
