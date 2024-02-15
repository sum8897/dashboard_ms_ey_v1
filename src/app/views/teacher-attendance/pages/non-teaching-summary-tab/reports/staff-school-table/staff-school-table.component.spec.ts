import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSchoolTableComponent } from './staff-school-table.component';

describe('StaffSchoolTableComponent', () => {
  let component: StaffSchoolTableComponent;
  let fixture: ComponentFixture<StaffSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
