import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComparativeTableComponent } from './student-comparative-table.component';

describe('StudentComparativeTableComponent', () => {
  let component: StudentComparativeTableComponent;
  let fixture: ComponentFixture<StudentComparativeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComparativeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComparativeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
