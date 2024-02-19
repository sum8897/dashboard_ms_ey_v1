import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTrendlineComponent } from './staff-trendline.component';

describe('StaffTrendlineComponent', () => {
  let component: StaffTrendlineComponent;
  let fixture: ComponentFixture<StaffTrendlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffTrendlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffTrendlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
