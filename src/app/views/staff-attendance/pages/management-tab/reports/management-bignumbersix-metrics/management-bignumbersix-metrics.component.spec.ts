import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumbersixMetricsComponent } from './management-bignumbersix-metrics.component';

describe('ManagementBignumbersixMetricsComponent', () => {
  let component: ManagementBignumbersixMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumbersixMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumbersixMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumbersixMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
