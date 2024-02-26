import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComparativeBarchartComponent } from './student-comparative-barchart.component';

describe('StudentComparativeBarchartComponent', () => {
  let component: StudentComparativeBarchartComponent;
  let fixture: ComponentFixture<StudentComparativeBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComparativeBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComparativeBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
