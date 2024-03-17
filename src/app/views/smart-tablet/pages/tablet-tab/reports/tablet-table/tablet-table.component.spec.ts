import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletTableComponent } from './tablet-table.component';

describe('TabletTableComponent', () => {
  let component: TabletTableComponent;
  let fixture: ComponentFixture<TabletTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
