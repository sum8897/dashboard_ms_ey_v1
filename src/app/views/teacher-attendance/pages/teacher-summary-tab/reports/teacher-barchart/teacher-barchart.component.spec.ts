import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBarchartComponent } from './teacher-barchart.component';

describe('TeacherBarchartComponent', () => {
  let component: TeacherBarchartComponent;
  let fixture: ComponentFixture<TeacherBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
