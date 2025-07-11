import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBignumbereightMetricsComponent } from './management-bignumbereight-metrics.component';

describe('ManagementBignumbereightMetricsComponent', () => {
  let component: ManagementBignumbereightMetricsComponent;
  let fixture: ComponentFixture<ManagementBignumbereightMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBignumbereightMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementBignumbereightMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
