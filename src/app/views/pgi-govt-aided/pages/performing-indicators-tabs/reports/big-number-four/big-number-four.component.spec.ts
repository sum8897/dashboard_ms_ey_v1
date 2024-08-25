import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberFourComponent } from './big-number-four.component';

describe('BigNumberFourComponent', () => {
  let component: BigNumberFourComponent;
  let fixture: ComponentFixture<BigNumberFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
