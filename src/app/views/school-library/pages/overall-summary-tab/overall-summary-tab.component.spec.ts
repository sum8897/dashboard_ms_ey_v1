import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallSummaryTabComponent } from './overall-summary-tab.component';

describe('OverallSummaryTabComponent', () => {
  let component: OverallSummaryTabComponent;
  let fixture: ComponentFixture<OverallSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
