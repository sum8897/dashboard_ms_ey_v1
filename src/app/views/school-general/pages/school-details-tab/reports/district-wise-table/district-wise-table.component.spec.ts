import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseTableComponent } from './district-wise-table.component';

describe('DistrictWiseTableComponent', () => {
  let component: DistrictWiseTableComponent;
  let fixture: ComponentFixture<DistrictWiseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
