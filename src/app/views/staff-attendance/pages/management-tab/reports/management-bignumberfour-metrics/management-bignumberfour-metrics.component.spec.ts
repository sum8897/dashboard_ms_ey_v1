import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumberfourMetricsComponent } from './management-bignumberfour-metrics.component';

describe('ManagementBignumberfourMetricsComponent', () => {
  let component: ManagementBignumberfourMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumberfourMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumberfourMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumberfourMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
