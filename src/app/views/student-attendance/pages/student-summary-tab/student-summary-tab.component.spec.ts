import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSummaryTabComponent } from './student-summary-tab.component';

describe('StudentSummaryTabComponent', () => {
  let component: StudentSummaryTabComponent;
  let fixture: ComponentFixture<StudentSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
