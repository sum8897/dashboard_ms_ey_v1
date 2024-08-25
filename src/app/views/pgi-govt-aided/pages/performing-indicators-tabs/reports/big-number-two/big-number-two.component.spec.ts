import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberTwoComponent } from './big-number-two.component';

describe('BigNumberTwoComponent', () => {
  let component: BigNumberTwoComponent;
  let fixture: ComponentFixture<BigNumberTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
