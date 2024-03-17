import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletCompleteBignumberComponent } from './tablet-complete-bignumber.component';

describe('TabletCompleteBignumberComponent', () => {
  let component: TabletCompleteBignumberComponent;
  let fixture: ComponentFixture<TabletCompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletCompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletCompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
