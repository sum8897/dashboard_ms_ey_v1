import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSafetyFirstBarChartComponent } from './school-safety-first-bar-chart.component';

describe('SchoolSafetyFirstBarChartComponent', () => {
  let component: SchoolSafetyFirstBarChartComponent;
  let fixture: ComponentFixture<SchoolSafetyFirstBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSafetyFirstBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSafetyFirstBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
