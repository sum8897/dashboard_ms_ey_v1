import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSchoolTableComponent } from './teacher-school-table.component';

describe('TeacherSchoolTableComponent', () => {
  let component: TeacherSchoolTableComponent;
  let fixture: ComponentFixture<TeacherSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
