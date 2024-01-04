import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuldingFacilitiesComponent } from './bulding-facilities.component';

describe('BuldingFacilitiesComponent', () => {
  let component: BuldingFacilitiesComponent;
  let fixture: ComponentFixture<BuldingFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuldingFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuldingFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
