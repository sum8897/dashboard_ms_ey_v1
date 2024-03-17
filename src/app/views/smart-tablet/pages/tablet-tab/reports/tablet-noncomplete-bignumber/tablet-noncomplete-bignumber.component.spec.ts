import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletNoncompleteBignumberComponent } from './tablet-noncomplete-bignumber.component';

describe('TabletNoncompleteBignumberComponent', () => {
  let component: TabletNoncompleteBignumberComponent;
  let fixture: ComponentFixture<TabletNoncompleteBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletNoncompleteBignumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletNoncompleteBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
