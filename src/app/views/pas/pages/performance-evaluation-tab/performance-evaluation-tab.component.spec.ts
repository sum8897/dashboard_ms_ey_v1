import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEvaluationTabComponent } from './performance-evaluation-tab.component';

describe('PerformanceEvaluationTabComponent', () => {
  let component: PerformanceEvaluationTabComponent;
  let fixture: ComponentFixture<PerformanceEvaluationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceEvaluationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceEvaluationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
