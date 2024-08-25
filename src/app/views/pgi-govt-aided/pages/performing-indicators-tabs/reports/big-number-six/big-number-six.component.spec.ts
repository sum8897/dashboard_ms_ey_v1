import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberSixComponent } from './big-number-six.component';

describe('BigNumberSixComponent', () => {
  let component: BigNumberSixComponent;
  let fixture: ComponentFixture<BigNumberSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
