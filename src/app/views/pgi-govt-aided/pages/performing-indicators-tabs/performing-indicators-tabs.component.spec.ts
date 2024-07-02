import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformingIndicatorsTabsComponent } from './performing-indicators-tabs.component';

describe('PerformingIndicatorsTabsComponent', () => {
  let component: PerformingIndicatorsTabsComponent;
  let fixture: ComponentFixture<PerformingIndicatorsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformingIndicatorsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformingIndicatorsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
