import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgressionViewComponent } from './student-progression-view.component';

describe('StudentProgressionViewComponent', () => {
  let component: StudentProgressionViewComponent;
  let fixture: ComponentFixture<StudentProgressionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgressionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProgressionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
