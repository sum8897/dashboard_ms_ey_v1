import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFilterTypeComponent } from './chart-filter-type.component';

describe('ChartFilterTypeComponent', () => {
  let component: ChartFilterTypeComponent;
  let fixture: ComponentFixture<ChartFilterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFilterTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartFilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
