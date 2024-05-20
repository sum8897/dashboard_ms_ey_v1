import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberMetricsComponent } from './staff-details-big-number-metrics.component';

describe('StaffDetailsBigNumberMetricsComponent', () => {
  let component: StaffDetailsBigNumberMetricsComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
