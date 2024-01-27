import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBarchartComponent } from './analysis-barchart.component';

describe('AnalysisBarchartComponent', () => {
  let component: AnalysisBarchartComponent;
  let fixture: ComponentFixture<AnalysisBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
