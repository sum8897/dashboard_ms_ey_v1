import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoWisePerformanceComponent } from './lo-wise-performance.component';

describe('LoWisePerformanceComponent', () => {
  let component: LoWisePerformanceComponent;
  let fixture: ComponentFixture<LoWisePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoWisePerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoWisePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
