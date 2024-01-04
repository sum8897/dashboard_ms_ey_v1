import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraCleanMapComponent } from './udise-schoolinfra-clean-map.component';

describe('UdiseSchoolinfraCleanMapComponent', () => {
  let component: UdiseSchoolinfraCleanMapComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraCleanMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraCleanMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraCleanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
