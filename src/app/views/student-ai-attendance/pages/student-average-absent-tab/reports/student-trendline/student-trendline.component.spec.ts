import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrendlineComponent } from './student-trendline.component';

describe('StudentTrendlineComponent', () => {
  let component: StudentTrendlineComponent;
  let fixture: ComponentFixture<StudentTrendlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTrendlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTrendlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
