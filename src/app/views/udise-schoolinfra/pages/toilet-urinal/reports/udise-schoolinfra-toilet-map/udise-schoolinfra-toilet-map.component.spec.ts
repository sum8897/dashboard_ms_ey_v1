import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraToiletMapComponent } from './udise-schoolinfra-toilet-map.component';

describe('UdiseSchoolinfraToiletMapComponent', () => {
  let component: UdiseSchoolinfraToiletMapComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraToiletMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraToiletMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraToiletMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
