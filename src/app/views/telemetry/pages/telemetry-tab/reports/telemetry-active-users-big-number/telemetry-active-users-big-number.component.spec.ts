import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryActiveUsersBigNumberComponent } from './telemetry-active-users-big-number.component';

describe('TelemetryActiveUsersBigNumberComponent', () => {
  let component: TelemetryActiveUsersBigNumberComponent;
  let fixture: ComponentFixture<TelemetryActiveUsersBigNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetryActiveUsersBigNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetryActiveUsersBigNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
