import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSummaryTabComponent } from './teacher-summary-tab.component';

describe('TeacherSummaryTabComponent', () => {
  let component: TeacherSummaryTabComponent;
  let fixture: ComponentFixture<TeacherSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
