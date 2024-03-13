import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRatioTableComponent } from './teacher-ratio-table.component';

describe('TeacherRatioTableComponent', () => {
  let component: TeacherRatioTableComponent;
  let fixture: ComponentFixture<TeacherRatioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRatioTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRatioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
