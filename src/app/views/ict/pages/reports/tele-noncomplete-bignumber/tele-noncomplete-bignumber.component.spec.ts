import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleNoncompleteBignumberComponent } from './tele-noncomplete-bignumber.component';

describe('TeleNoncompleteBignumberComponent', () => {
  let component: TeleNoncompleteBignumberComponent;
  let fixture: ComponentFixture<TeleNoncompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleNoncompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleNoncompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
