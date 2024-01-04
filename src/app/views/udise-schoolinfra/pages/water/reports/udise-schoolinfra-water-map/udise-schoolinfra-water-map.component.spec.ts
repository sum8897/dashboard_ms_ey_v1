import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraWaterMapComponent } from './udise-schoolinfra-water-map.component';

describe('UdiseSchoolinfraWaterMapComponent', () => {
  let component: UdiseSchoolinfraWaterMapComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraWaterMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraWaterMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraWaterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
