import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPercentageChangeBignumberComponent } from './student-percentage-change-bignumber.component';

describe('StudentPercentageChangeBignumberComponent', () => {
  let component: StudentPercentageChangeBignumberComponent;
  let fixture: ComponentFixture<StudentPercentageChangeBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPercentageChangeBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPercentageChangeBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
