import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumberfiveMetricsComponent } from './overall-status-bignumberfive-metrics.component';

describe('OverallStatusBignumberfiveMetricsComponent', () => {
  let component: OverallStatusBignumberfiveMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumberfiveMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumberfiveMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumberfiveMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
