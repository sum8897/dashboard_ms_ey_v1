import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumbersevenMetricsComponent } from './management-bignumberseven-metrics.component';

describe('ManagementBignumbersevenMetricsComponent', () => {
  let component: ManagementBignumbersevenMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumbersevenMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumbersevenMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumbersevenMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
