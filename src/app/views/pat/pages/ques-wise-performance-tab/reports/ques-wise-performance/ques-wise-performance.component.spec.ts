import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesWisePerformanceComponent } from './ques-wise-performance.component';

describe('QuesWisePerformanceComponent', () => {
  let component: QuesWisePerformanceComponent;
  let fixture: ComponentFixture<QuesWisePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesWisePerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuesWisePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
