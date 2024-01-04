import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoTrendlineChartComponent } from './lo-trendline-chart.component';

describe('LoTrendlineChartComponent', () => {
  let component: LoTrendlineChartComponent;
  let fixture: ComponentFixture<LoTrendlineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoTrendlineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoTrendlineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
