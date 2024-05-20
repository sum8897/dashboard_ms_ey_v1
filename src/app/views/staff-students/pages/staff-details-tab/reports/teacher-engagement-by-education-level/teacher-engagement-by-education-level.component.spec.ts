import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEngagementByEducationLevelComponent } from './teacher-engagement-by-education-level.component';

describe('TeacherEngagementByEducationLevelComponent', () => {
  let component: TeacherEngagementByEducationLevelComponent;
  let fixture: ComponentFixture<TeacherEngagementByEducationLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEngagementByEducationLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEngagementByEducationLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
