import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberIctComponent } from './big-number-ict.component';

describe('BigNumberIctComponent', () => {
  let component: BigNumberIctComponent;
  let fixture: ComponentFixture<BigNumberIctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberIctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberIctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
