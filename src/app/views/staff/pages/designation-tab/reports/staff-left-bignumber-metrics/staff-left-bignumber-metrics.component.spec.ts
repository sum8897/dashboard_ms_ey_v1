import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeftBignumberMetricsComponent } from './staff-left-bignumber-metrics.component';

describe('StaffLeftBignumberMetricsComponent', () => {
  let component: StaffLeftBignumberMetricsComponent;
  let fixture: ComponentFixture<StaffLeftBignumberMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeftBignumberMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeftBignumberMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
