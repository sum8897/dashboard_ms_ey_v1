import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComparativeBignumberComponent } from './student-comparative-bignumber.component';

describe('StudentComparativeBignumberComponent', () => {
  let component: StudentComparativeBignumberComponent;
  let fixture: ComponentFixture<StudentComparativeBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComparativeBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComparativeBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
