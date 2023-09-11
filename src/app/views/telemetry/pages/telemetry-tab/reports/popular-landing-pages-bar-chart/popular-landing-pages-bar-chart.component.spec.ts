import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularLandingPagesBarChartComponent } from './popular-landing-pages-bar-chart.component';

describe('PopularLandingPagesBarChartComponent', () => {
  let component: PopularLandingPagesBarChartComponent;
  let fixture: ComponentFixture<PopularLandingPagesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularLandingPagesBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularLandingPagesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
