import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgressionComponent } from './student-progression.component';

describe('StudentProgressionComponent', () => {
  let component: StudentProgressionComponent;
  let fixture: ComponentFixture<StudentProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
