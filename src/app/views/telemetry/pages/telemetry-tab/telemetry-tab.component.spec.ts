import { ComponentFixture, TestBed } from '@angular/core/testing';

import { telemetryTabComponent } from './telemetry-tab.component';

describe('telemetryTabComponent', () => {
  let component: telemetryTabComponent;
  let fixture: ComponentFixture<telemetryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ telemetryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(telemetryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
