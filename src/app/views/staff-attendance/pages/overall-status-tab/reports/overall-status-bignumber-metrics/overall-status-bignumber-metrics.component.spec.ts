import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumberMetricsComponent } from './overall-status-bignumber-metrics.component';

describe('OverallStatusBignumberMetricsComponent', () => {
  let component: OverallStatusBignumberMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
