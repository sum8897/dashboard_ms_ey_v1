import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsBigNumberCardTwoComponent } from './student-details-big-number-card-two.component';

describe('StudentDetailsBigNumberCardTwoComponent', () => {
  let component: StudentDetailsBigNumberCardTwoComponent;
  let fixture: ComponentFixture<StudentDetailsBigNumberCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsBigNumberCardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsBigNumberCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
