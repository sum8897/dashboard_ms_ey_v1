import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBignumberComponent } from './teacher-bignumber.component';

describe('TeacherBignumberComponent', () => {
  let component: TeacherBignumberComponent;
  let fixture: ComponentFixture<TeacherBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
