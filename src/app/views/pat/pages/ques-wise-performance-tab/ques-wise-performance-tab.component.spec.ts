import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesWisePerformanceTabComponent } from './ques-wise-performance-tab.component';

describe('QuesWisePerformanceTabComponent', () => {
  let component: QuesWisePerformanceTabComponent;
  let fixture: ComponentFixture<QuesWisePerformanceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesWisePerformanceTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesWisePerformanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
