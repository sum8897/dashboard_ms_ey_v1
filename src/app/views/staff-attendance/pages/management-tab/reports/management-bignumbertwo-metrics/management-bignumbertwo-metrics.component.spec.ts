import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumbertwoMetricsComponent } from './management-bignumbertwo-metrics.component';

describe('ManagementBignumbertwoMetricsComponent', () => {
  let component: ManagementBignumbertwoMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumbertwoMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumbertwoMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumbertwoMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
