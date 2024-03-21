import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderParityBarchartComponent } from './gender-parity-barchart.component';

describe('GenderParityBarchartComponent', () => {
  let component: GenderParityBarchartComponent;
  let fixture: ComponentFixture<GenderParityBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderParityBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderParityBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
