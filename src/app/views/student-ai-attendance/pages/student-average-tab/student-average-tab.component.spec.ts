import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageTabComponent } from './student-average-tab.component';

describe('StudentAverageTabComponent', () => {
  let component: StudentAverageTabComponent;
  let fixture: ComponentFixture<StudentAverageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
