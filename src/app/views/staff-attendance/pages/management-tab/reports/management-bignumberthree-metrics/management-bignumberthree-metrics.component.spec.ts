import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumberthreeMetricsComponent } from './management-bignumberthree-metrics.component';

describe('ManagementBignumberthreeMetricsComponent', () => {
  let component: ManagementBignumberthreeMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumberthreeMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumberthreeMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumberthreeMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
