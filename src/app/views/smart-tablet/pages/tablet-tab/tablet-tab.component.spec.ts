import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletTabComponent } from './tablet-tab.component';

describe('TabletTabComponent', () => {
  let component: TabletTabComponent;
  let fixture: ComponentFixture<TabletTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
