import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAttendanceTabComponent } from './teaching-attendance-tab.component';

describe('TeachingAttendanceTabComponent', () => {
  let component: TeachingAttendanceTabComponent;
  let fixture: ComponentFixture<TeachingAttendanceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingAttendanceTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingAttendanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
