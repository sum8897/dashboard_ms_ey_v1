import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBignumberComponent } from './staff-bignumber.component';

describe('StaffBignumberComponent', () => {
  let component: StaffBignumberComponent;
  let fixture: ComponentFixture<StaffBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
