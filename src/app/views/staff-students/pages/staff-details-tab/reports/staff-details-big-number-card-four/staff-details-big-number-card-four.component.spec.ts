import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberCardFourComponent } from './staff-details-big-number-card-four.component';

describe('StaffDetailsBigNumberCardFourComponent', () => {
  let component: StaffDetailsBigNumberCardFourComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberCardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberCardFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
