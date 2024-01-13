import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSummaryTabComponent } from './district-wise-summary-tab.component';

describe('DistrictWiseSummaryTabComponent', () => {
  let component: DistrictWiseSummaryTabComponent;
  let fixture: ComponentFixture<DistrictWiseSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
