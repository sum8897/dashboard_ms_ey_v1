import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberThreeComponent } from './big-number-three.component';

describe('BigNumberThreeComponent', () => {
  let component: BigNumberThreeComponent;
  let fixture: ComponentFixture<BigNumberThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumberThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
