import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumbernineMetricsComponent } from './management-bignumbernine-metrics.component';

describe('ManagementBignumbernineMetricsComponent', () => {
  let component: ManagementBignumbernineMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumbernineMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumbernineMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumbernineMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
