import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchoolTableComponent } from './student-school-table.component';

describe('StudentSchoolTableComponent', () => {
  let component: StudentSchoolTableComponent;
  let fixture: ComponentFixture<StudentSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
