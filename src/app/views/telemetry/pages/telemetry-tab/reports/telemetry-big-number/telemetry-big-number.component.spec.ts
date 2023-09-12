import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryBigNumberComponent } from './telemetry-big-number.component';

describe('TelemetryBigNumberComponent', () => {
  let component: TelemetryBigNumberComponent;
  let fixture: ComponentFixture<TelemetryBigNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetryBigNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetryBigNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
