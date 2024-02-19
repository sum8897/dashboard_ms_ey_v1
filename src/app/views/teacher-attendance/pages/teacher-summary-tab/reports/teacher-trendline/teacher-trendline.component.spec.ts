import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTrendlineComponent } from './teacher-trendline.component';

describe('TeacherTrendlineComponent', () => {
  let component: TeacherTrendlineComponent;
  let fixture: ComponentFixture<TeacherTrendlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTrendlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherTrendlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
