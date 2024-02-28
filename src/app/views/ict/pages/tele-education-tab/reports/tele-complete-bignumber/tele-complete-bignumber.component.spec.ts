import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleCompleteBignumberComponent } from './tele-complete-bignumber.component';

describe('TeleCompleteBignumberComponent', () => {
  let component: TeleCompleteBignumberComponent;
  let fixture: ComponentFixture<TeleCompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleCompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleCompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
