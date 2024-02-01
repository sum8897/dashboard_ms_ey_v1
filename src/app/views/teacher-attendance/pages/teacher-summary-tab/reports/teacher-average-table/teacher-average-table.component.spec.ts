import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAverageTableComponent } from './teacher-average-table.component';

describe('TeacherAverageTableComponent', () => {
  let component: TeacherAverageTableComponent;
  let fixture: ComponentFixture<TeacherAverageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAverageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAverageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
