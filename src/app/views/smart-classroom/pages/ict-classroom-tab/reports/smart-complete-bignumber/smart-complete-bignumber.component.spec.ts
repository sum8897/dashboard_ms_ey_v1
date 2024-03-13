import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCompleteBignumberComponent } from './smart-complete-bignumber.component';

describe('SmartCompleteBignumberComponent', () => {
  let component: SmartCompleteBignumberComponent;
  let fixture: ComponentFixture<SmartCompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
