import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDenrollBignumberComponent } from './student-denroll-bignumber.component';

describe('StudentDenrollBignumberComponent', () => {
  let component: StudentDenrollBignumberComponent;
  let fixture: ComponentFixture<StudentDenrollBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDenrollBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDenrollBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
