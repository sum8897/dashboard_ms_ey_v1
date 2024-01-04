import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoWisePerformanceTabComponent } from './lo-wise-performance-tab.component';

describe('LoWisePerformanceTabComponent', () => {
  let component: LoWisePerformanceTabComponent;
  let fixture: ComponentFixture<LoWisePerformanceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoWisePerformanceTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoWisePerformanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
