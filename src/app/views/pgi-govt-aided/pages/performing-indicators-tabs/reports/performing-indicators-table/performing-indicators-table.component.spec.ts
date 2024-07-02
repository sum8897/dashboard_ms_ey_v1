import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingIndicatorsTableComponent } from './performing-indicators-table.component';

describe('PerformingIndicatorsTableComponent', () => {
  let component: PerformingIndicatorsTableComponent;
  let fixture: ComponentFixture<PerformingIndicatorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformingIndicatorsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformingIndicatorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
