import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumbertwoMetricsComponent } from './overall-status-bignumbertwo-metrics.component';

describe('OverallStatusBignumbertwoMetricsComponent', () => {
  let component: OverallStatusBignumbertwoMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumbertwoMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumbertwoMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumbertwoMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
