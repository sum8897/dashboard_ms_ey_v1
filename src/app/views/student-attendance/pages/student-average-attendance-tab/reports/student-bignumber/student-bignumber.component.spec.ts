import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBignumberComponent } from './student-bignumber.component';

describe('StudentBignumberComponent', () => {
  let component: StudentBignumberComponent;
  let fixture: ComponentFixture<StudentBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
