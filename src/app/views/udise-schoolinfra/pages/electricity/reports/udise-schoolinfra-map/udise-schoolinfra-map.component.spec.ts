import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraMapComponent } from './udise-schoolinfra-map.component';

describe('UdiseSchoolinfraMapComponent', () => {
  let component: UdiseSchoolinfraMapComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
