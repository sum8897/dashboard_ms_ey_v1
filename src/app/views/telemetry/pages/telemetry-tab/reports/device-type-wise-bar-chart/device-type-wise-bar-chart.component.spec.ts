import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypeWiseBarChartComponent } from './device-type-wise-bar-chart.component';

describe('DeviceTypeWiseBarChartComponent', () => {
  let component: DeviceTypeWiseBarChartComponent;
  let fixture: ComponentFixture<DeviceTypeWiseBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTypeWiseBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceTypeWiseBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
