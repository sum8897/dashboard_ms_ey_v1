import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsBigNumberCardOneComponent } from './student-details-big-number-card-one.component';

describe('StudentDetailsBigNumberCardOneComponent', () => {
  let component: StudentDetailsBigNumberCardOneComponent;
  let fixture: ComponentFixture<StudentDetailsBigNumberCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsBigNumberCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsBigNumberCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
