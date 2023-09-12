import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentPerPageBarChartComponent } from './time-spent-per-page-bar-chart.component';

describe('TimeSpentPerPageBarChartComponent', () => {
  let component: TimeSpentPerPageBarChartComponent;
  let fixture: ComponentFixture<TimeSpentPerPageBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSpentPerPageBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSpentPerPageBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
