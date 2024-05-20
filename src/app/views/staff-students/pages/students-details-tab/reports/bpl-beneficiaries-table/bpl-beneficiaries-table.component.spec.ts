import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BplBeneficiariesTableComponent } from './bpl-beneficiaries-table.component';

describe('BplBeneficiariesTableComponent', () => {
  let component: BplBeneficiariesTableComponent;
  let fixture: ComponentFixture<BplBeneficiariesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BplBeneficiariesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BplBeneficiariesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
