import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingIndicatorsBigNumberMetricsComponent } from './performing-indicators-big-number-metrics.component';

describe('PerformingIndicatorsBigNumberMetricsComponent', () => {
  let component: PerformingIndicatorsBigNumberMetricsComponent;
  let fixture: ComponentFixture<PerformingIndicatorsBigNumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformingIndicatorsBigNumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformingIndicatorsBigNumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
