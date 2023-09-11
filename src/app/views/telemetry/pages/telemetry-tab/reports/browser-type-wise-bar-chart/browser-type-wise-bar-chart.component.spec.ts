import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTypeWiseBarChartComponent } from './browser-type-wise-bar-chart.component';

describe('BrowserTypeWiseBarChartComponent', () => {
  let component: BrowserTypeWiseBarChartComponent;
  let fixture: ComponentFixture<BrowserTypeWiseBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserTypeWiseBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserTypeWiseBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
