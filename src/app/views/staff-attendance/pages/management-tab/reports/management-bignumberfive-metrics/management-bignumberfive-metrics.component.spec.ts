import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumberfiveMetricsComponent } from './management-bignumberfive-metrics.component';

describe('ManagementBignumberfiveMetricsComponent', () => {
  let component: ManagementBignumberfiveMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumberfiveMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumberfiveMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumberfiveMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
