import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComparativeSchoolTableComponent } from './student-comparative-school-table.component';

describe('StudentComparativeSchoolTableComponent', () => {
  let component: StudentComparativeSchoolTableComponent;
  let fixture: ComponentFixture<StudentComparativeSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComparativeSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComparativeSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
