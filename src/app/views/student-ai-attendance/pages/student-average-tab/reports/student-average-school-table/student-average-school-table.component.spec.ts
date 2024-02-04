import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageSchoolTableComponent } from './student-average-school-table.component';

describe('StudentAverageSchoolTableComponent', () => {
  let component: StudentAverageSchoolTableComponent;
  let fixture: ComponentFixture<StudentAverageSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
