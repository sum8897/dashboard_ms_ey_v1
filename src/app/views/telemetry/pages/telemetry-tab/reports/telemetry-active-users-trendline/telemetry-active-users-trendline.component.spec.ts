import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryActiveUsersTrendlineComponent } from './telemetry-active-users-trendline.component';

describe('TelemetryActiveUsersTrendlineComponent', () => {
  let component: TelemetryActiveUsersTrendlineComponent;
  let fixture: ComponentFixture<TelemetryActiveUsersTrendlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetryActiveUsersTrendlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetryActiveUsersTrendlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
