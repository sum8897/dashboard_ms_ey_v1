import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberCardThreeComponent } from './staff-details-big-number-card-three.component';

describe('StaffDetailsBigNumberCardThreeComponent', () => {
  let component: StaffDetailsBigNumberCardThreeComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberCardThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
