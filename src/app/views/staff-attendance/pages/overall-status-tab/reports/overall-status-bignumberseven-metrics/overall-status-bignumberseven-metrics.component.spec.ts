import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumbersevenMetricsComponent } from './overall-status-bignumberseven-metrics.component';

describe('OverallStatusBignumbersevenMetricsComponent', () => {
  let component: OverallStatusBignumbersevenMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumbersevenMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumbersevenMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumbersevenMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
