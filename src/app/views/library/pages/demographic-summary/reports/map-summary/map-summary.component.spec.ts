import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSummaryComponent } from './map-summary.component';

describe('MapSummaryComponent', () => {
  let component: MapSummaryComponent;
  let fixture: ComponentFixture<MapSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
