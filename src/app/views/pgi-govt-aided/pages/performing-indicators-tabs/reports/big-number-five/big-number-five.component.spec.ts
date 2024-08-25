import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberFiveComponent } from './big-number-five.component';

describe('BigNumberFiveComponent', () => {
  let component: BigNumberFiveComponent;
  let fixture: ComponentFixture<BigNumberFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
