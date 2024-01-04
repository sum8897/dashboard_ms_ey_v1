import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraBuildingMapComponent } from './udise-schoolinfra-building-map.component';

describe('UdiseSchoolinfraBuildingMapComponent', () => {
  let component: UdiseSchoolinfraBuildingMapComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraBuildingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraBuildingMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraBuildingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
