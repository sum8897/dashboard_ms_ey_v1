import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdiseSchoolinfraComponent } from './udise-schoolinfra.component';

describe('UdiseSchoolinfraComponent', () => {
  let component: UdiseSchoolinfraComponent;
  let fixture: ComponentFixture<UdiseSchoolinfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdiseSchoolinfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdiseSchoolinfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
