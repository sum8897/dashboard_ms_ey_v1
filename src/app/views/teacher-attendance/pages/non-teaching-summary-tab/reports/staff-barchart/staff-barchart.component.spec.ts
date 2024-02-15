import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBarchartComponent } from './staff-barchart.component';

describe('StaffBarchartComponent', () => {
  let component: StaffBarchartComponent;
  let fixture: ComponentFixture<StaffBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
