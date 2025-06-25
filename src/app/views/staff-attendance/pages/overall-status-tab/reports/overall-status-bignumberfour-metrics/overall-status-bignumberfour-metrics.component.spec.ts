import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumberfourMetricsComponent } from './overall-status-bignumberfour-metrics.component';

describe('OverallStatusBignumberfourMetricsComponent', () => {
  let component: OverallStatusBignumberfourMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumberfourMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumberfourMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumberfourMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
