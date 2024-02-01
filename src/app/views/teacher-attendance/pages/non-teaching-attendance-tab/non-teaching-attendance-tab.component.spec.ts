import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingAttendanceTabComponent } from './non-teaching-attendance-tab.component';

describe('NonTeachingAttendanceTabComponent', () => {
  let component: NonTeachingAttendanceTabComponent;
  let fixture: ComponentFixture<NonTeachingAttendanceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTeachingAttendanceTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTeachingAttendanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
