import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomRatioTableComponent } from './classroom-ratio-table.component';

describe('ClassroomRatioTableComponent', () => {
  let component: ClassroomRatioTableComponent;
  let fixture: ComponentFixture<ClassroomRatioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomRatioTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomRatioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
