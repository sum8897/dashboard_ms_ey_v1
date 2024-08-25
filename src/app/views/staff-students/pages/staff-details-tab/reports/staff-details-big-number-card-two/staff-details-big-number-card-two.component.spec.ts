import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberCardTwoComponent } from './staff-details-big-number-card-two.component';

describe('StaffDetailsBigNumberCardTwoComponent', () => {
  let component: StaffDetailsBigNumberCardTwoComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberCardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
