import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSafetyBigNumberMetricsComponent } from './school-safety-big-number-metrics.component';

describe('SchoolSafetyBigNumberMetricsComponent', () => {
  let component: SchoolSafetyBigNumberMetricsComponent;
  let fixture: ComponentFixture<SchoolSafetyBigNumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSafetyBigNumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSafetyBigNumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
