import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGraphComponent } from './attendance-graph.component';

describe('AttendanceGraphComponent', () => {
  let component: AttendanceGraphComponent;
  let fixture: ComponentFixture<AttendanceGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
