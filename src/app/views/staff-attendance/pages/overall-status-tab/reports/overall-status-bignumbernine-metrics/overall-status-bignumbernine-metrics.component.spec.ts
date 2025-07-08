import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumbernineMetricsComponent } from './overall-status-bignumbernine-metrics.component';

describe('OverallStatusBignumbernineMetricsComponent', () => {
  let component: OverallStatusBignumbernineMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumbernineMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumbernineMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumbernineMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
