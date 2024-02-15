import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAverageTableComponent } from './student-average-table.component';

describe('StudentAverageTableComponent', () => {
  let component: StudentAverageTableComponent;
  let fixture: ComponentFixture<StudentAverageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAverageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAverageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
