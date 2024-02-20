import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageAbsentTabComponent } from './student-average-absent-tab.component';

describe('StudentAverageAbsentTabComponent', () => {
  let component: StudentAverageAbsentTabComponent;
  let fixture: ComponentFixture<StudentAverageAbsentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageAbsentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageAbsentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
