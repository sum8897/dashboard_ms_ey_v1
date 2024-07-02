import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingIndicatorsTableTwoComponent } from './performing-indicators-table-two.component';

describe('PerformingIndicatorsTableTwoComponent', () => {
  let component: PerformingIndicatorsTableTwoComponent;
  let fixture: ComponentFixture<PerformingIndicatorsTableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformingIndicatorsTableTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformingIndicatorsTableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
