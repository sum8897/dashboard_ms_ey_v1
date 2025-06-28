import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumberoneMetricsComponent } from './overall-status-bignumberone-metrics.component';

describe('OverallStatusBignumberoneMetricsComponent', () => {
  let component: OverallStatusBignumberoneMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumberoneMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumberoneMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumberoneMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
