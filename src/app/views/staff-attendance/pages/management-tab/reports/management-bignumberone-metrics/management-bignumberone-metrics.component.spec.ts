import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumberoneMetricsComponent } from './management-bignumberone-metrics.component';

describe('ManagementBignumberoneMetricsComponent', () => {
  let component: ManagementBignumberoneMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumberoneMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumberoneMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumberoneMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
