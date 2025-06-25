import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumberthreeMetricsComponent } from './overall-status-bignumberthree-metrics.component';

describe('OverallStatusBignumberthreeMetricsComponent', () => {
  let component: OverallStatusBignumberthreeMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumberthreeMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumberthreeMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumberthreeMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
