import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberCardFiveComponent } from './staff-details-big-number-card-five.component';

describe('StaffDetailsBigNumberCardFiveComponent', () => {
  let component: StaffDetailsBigNumberCardFiveComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberCardFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberCardFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberCardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
