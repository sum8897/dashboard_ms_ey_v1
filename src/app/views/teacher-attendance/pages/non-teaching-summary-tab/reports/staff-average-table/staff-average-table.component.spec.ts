import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAverageTableComponent } from './staff-average-table.component';

describe('StaffAverageTableComponent', () => {
  let component: StaffAverageTableComponent;
  let fixture: ComponentFixture<StaffAverageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAverageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAverageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
