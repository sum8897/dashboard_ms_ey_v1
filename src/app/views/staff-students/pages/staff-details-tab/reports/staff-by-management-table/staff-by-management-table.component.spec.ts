import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffByManagementTableComponent } from './staff-by-management-table.component';

describe('StaffByManagementTableComponent', () => {
  let component: StaffByManagementTableComponent;
  let fixture: ComponentFixture<StaffByManagementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffByManagementTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffByManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
