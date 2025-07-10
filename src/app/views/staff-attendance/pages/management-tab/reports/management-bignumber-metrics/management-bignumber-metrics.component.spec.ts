import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumberMetricsComponent } from './management-bignumber-metrics.component';

describe('ManagementBignumberMetricsComponent', () => {
  let component: ManagementBignumberMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
