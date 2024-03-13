import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartIncompleteBignumberComponent } from './smart-incomplete-bignumber.component';

describe('SmartIncompleteBignumberComponent', () => {
  let component: SmartIncompleteBignumberComponent;
  let fixture: ComponentFixture<SmartIncompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartIncompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartIncompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
