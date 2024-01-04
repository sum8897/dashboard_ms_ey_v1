import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoAverageBarchartComponent } from './lo-average-barchart.component';

describe('LoAverageBarchartComponent', () => {
  let component: LoAverageBarchartComponent;
  let fixture: ComponentFixture<LoAverageBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoAverageBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoAverageBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
