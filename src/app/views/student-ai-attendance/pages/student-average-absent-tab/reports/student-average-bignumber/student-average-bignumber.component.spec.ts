import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageBignumberComponent } from './student-average-bignumber.component';

describe('StudentAverageBignumberComponent', () => {
  let component: StudentAverageBignumberComponent;
  let fixture: ComponentFixture<StudentAverageBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
