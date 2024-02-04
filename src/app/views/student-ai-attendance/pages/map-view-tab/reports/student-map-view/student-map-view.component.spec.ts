import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMapViewComponent } from './student-map-view.component';

describe('StudentMapViewComponent', () => {
  let component: StudentMapViewComponent;
  let fixture: ComponentFixture<StudentMapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMapViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
