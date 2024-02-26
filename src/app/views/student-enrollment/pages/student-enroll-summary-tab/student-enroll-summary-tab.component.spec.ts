import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollSummaryTabComponent } from './student-enroll-summary-tab.component';

describe('StudentEnrollSummaryTabComponent', () => {
  let component: StudentEnrollSummaryTabComponent;
  let fixture: ComponentFixture<StudentEnrollSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrollSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEnrollSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
