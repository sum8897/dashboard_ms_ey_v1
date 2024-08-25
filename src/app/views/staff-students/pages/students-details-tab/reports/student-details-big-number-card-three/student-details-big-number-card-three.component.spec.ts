import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsBigNumberCardThreeComponent } from './student-details-big-number-card-three.component';

describe('StudentDetailsBigNumberCardThreeComponent', () => {
  let component: StudentDetailsBigNumberCardThreeComponent;
  let fixture: ComponentFixture<StudentDetailsBigNumberCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsBigNumberCardThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsBigNumberCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
