import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsTabComponent } from './staff-details-tab.component';

describe('StaffDetailsTabComponent', () => {
  let component: StaffDetailsTabComponent;
  let fixture: ComponentFixture<StaffDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
