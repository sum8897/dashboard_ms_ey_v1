import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoAverageBignumberComponent } from './lo-average-bignumber.component';

describe('LoAverageBignumberComponent', () => {
  let component: LoAverageBignumberComponent;
  let fixture: ComponentFixture<LoAverageBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoAverageBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoAverageBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
