import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumbersixMetricsComponent } from './overall-status-bignumbersix-metrics.component';

describe('OverallStatusBignumbersixMetricsComponent', () => {
  let component: OverallStatusBignumbersixMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumbersixMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumbersixMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumbersixMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
