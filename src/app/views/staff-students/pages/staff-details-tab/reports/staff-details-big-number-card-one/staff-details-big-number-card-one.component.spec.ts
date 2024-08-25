import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsBigNumberCardOneComponent } from './staff-details-big-number-card-one.component';

describe('StaffDetailsBigNumberCardOneComponent', () => {
  let component: StaffDetailsBigNumberCardOneComponent;
  let fixture: ComponentFixture<StaffDetailsBigNumberCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsBigNumberCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsBigNumberCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
