import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusBignumbereightMetricsComponent } from './overall-status-bignumbereight-metrics.component';

describe('OverallStatusBignumbereightMetricsComponent', () => {
  let component: OverallStatusBignumbereightMetricsComponent;
  let fixture: ComponentFixture<OverallStatusBignumbereightMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatusBignumbereightMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallStatusBignumbereightMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
