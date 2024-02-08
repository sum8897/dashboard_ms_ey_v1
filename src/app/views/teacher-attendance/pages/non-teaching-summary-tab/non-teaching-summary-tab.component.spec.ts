import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingSummaryTabComponent } from './non-teaching-summary-tab.component';

describe('NonTeachingSummaryTabComponent', () => {
  let component: NonTeachingSummaryTabComponent;
  let fixture: ComponentFixture<NonTeachingSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTeachingSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTeachingSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
