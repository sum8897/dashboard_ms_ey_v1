import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBarchartComponent } from './student-barchart.component';

describe('StudentBarchartComponent', () => {
  let component: StudentBarchartComponent;
  let fixture: ComponentFixture<StudentBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
